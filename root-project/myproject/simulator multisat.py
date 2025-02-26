#!/usr/bin/env python3

import binascii
import io
import socket
import sys
import argparse

from struct import unpack_from
from threading import Thread
from time import sleep

parser = argparse.ArgumentParser(description='Yamcs Simulator')
parser.add_argument('--testdata', type=str, default='testdata.ccsds', help='simulated testdata.ccsds data')

# telemetry
parser.add_argument('--tm_host',    type=str, default='127.0.0.1', help='TM host')
parser.add_argument('--tm_port',    type=int, default=10015,       help='TM port')
parser.add_argument('-r', '--rate', type=int, default=1,           help='TM playback rate. 1 = 1Hz, 10 = 10Hz, etc.')

# telecommand
parser.add_argument('--tc_host', type=str, default='127.0.0.1', help='TC host')
parser.add_argument('--tc_port', type=int, default=10025 ,      help='TC port')

args = vars(parser.parse_args())

# test data
TEST_DATA = args['testdata']

# telemetry
TM_SEND_ADDRESS_1 = args['tm_host']
TM_SEND_PORT_1    = 8015
RATE_1            = 1
TM_SEND_ADDRESS_2 = args['tm_host']
TM_SEND_PORT_2    = 9015
RATE_2            = 2

# telecommand
TC_RECEIVE_ADDRESS_1 = args['tc_host']
TC_RECEIVE_PORT_1    = 8025
TC_RECEIVE_ADDRESS_2 = args['tc_host']
TC_RECEIVE_PORT_2    = 9025

def send_tm(simulator):
    tm_socket = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)

    with io.open(TEST_DATA, 'rb') as f:
        simulator.tm_counter = 1
        header = bytearray(6)
        while f.readinto(header) == 6:
            (len,) = unpack_from('>H', header, 4)

            packet = bytearray(len + 7)
            f.seek(-6, io.SEEK_CUR)
            f.readinto(packet)

            tm_socket.sendto(packet, (simulator.tm_address, simulator.tm_port))
            simulator.tm_counter += 1

            sleep(1 / simulator.rate)


def receive_tc(simulator):
    tc_socket = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    tc_socket.bind((simulator.tc_address, simulator.tc_port))
    while True:
    	# using recvfrom for UDP and recv for TCP, while 4069 indicates number of bytes it can received 
        data, _ = tc_socket.recvfrom(4096)  
        simulator.last_tc = data
        simulator.tc_counter += 1


class Simulator():

    def __init__(self, rate, tc_address, tc_port, tm_address, tm_port):
        self.tm_counter = 0
        self.tc_counter = 0
        self.tc_address = tc_address
        self.tm_address = tm_address
        self.tc_port = tc_port
        self.tm_port = tm_port
        self.tm_thread = None
        self.tc_thread = None
        self.last_tc = None
        self.rate = rate

    def start(self):
        self.tm_thread = Thread(target=send_tm, args=(self,))
        self.tm_thread.daemon = True
        self.tm_thread.start()
        self.tc_thread = Thread(target=receive_tc, args=(self,))
        self.tc_thread.daemon = True
        self.tc_thread.start()
        
        sys.stdout.write('Using playback rate of ' + str(self.rate) + 'Hz, ')
        sys.stdout.write('TM host=' + str(self.tm_address) + ', TM port=' + str(self.tm_port) + ', ')
        sys.stdout.write('TC host=' + str(self.tc_address) + ', TC port=' + str(self.tc_port) + '\r\n')

    def print_status(self):
        cmdhex = None
        if self.last_tc:
            cmdhex = binascii.hexlify(self.last_tc).decode('ascii')
        return 'Sent: {} packets. Received: {} commands. Last command: {}'.format(
                         self.tm_counter, self.tc_counter, cmdhex)


if __name__ == '__main__':
    # Initialize satellite simulator
    satellite_1 = Simulator(RATE_1, TC_RECEIVE_ADDRESS_1, TC_RECEIVE_PORT_1, TM_SEND_ADDRESS_1, TM_SEND_PORT_1)
    sys.stdout.write('Satellite 1 : ')
    satellite_1.start()

    satellite_2 = Simulator(RATE_2, TC_RECEIVE_ADDRESS_2, TC_RECEIVE_PORT_2, TM_SEND_ADDRESS_2, TM_SEND_PORT_2)
    sys.stdout.write('Satellite 2 : ')
    satellite_2.start()
    
    try:
        prev_status_1 = None
        prev_status_2 = None
        while True:
            status_1 = satellite_1.print_status()
            status_2 = satellite_2.print_status()
            if status_1 != prev_status_1:
                prev_status_1 = status_1

            if status_2 != prev_status_2:
                prev_status_2 = status_2

            sys.stdout.write('\n')            
            sys.stdout.write('Satellite 1: ' + status_1)
            sys.stdout.write('\n')
            sys.stdout.write('Satellite 2: ' + status_2)

            sleep(0.5)
    except KeyboardInterrupt:
        sys.stdout.write('\n')
        sys.stdout.flush()
