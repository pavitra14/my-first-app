import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverCreated = false;
  serverName = '';
  serverId = [1];
  servers = [];
  serverStatus = [];
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 500);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverId[this.serverName] = Math.random() * (1000 - 1) + 1;
    this.serverStatus[this.serverName] = Math.random() > 0.5 ? 'online' : 'offline';
    this.serverCreationStatus = 'Server with name: ' + this.serverName + ' was created.';
  }

  getColor(server: string) {
    return this.serverStatus[server] === 'online' ? 'green' : 'red';
  }

  clearServers() {
    this.serverId = [];
    this.serverName = '';
    this.servers = [];
    this.serverStatus = [];
  }
}
