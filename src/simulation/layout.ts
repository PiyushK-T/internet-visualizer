export interface NodePosition {
  x:number;
  y:number;
}

export const nodePositions:Record<string,NodePosition> = {
  browser: {
    x: 490,
    y: 80
  },
  dns: {
    x: 900,
    y: 80
  },
  router: {
    x: 490,
    y: 250
  },
  cdn: {
    x: 900,
    y: 250
  },
  loadbalancer: {
    x: 490,
    y: 420
  },
  server1: {
    x: 300,
    y: 590
  },
  server2: {
    x: 700,
    y: 590
  },
  database: {
    x: 490,
    y: 770
  }
};