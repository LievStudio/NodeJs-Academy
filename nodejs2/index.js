const EventEmitter = require('events');
const util = require('util');

function myEmitter() {
    EventEmitter.call(this);
    process.nextTick(() => {
        this.emit('event');
        this.emit('userConnect');
    })
};

util.inherits(myEmitter, EventEmitter);

const eventEmmiter = new myEmitter;

eventEmmiter.on('event', () => console.log('Got the event'));

eventEmmiter.on('userConnect', () => console.log('User has connected'));