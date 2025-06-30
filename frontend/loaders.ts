import type { ContainerInfo, HostStats } from "../docker";

interface DefaultLoader {
  containers: {
    total: number;
    running: number;
    stopped: number;
    raw: ContainerInfo[];
  };
  hosts: {
    total: number;
    raw: HostStats[];
  };
  stacks: {
    total: number;
    names: string[];
  };
  plugins: {
    total: number;
    active: number;
    inactive: number;
  };
}

export type { DefaultLoader };
