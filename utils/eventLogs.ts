import { ethers } from 'ethers';
import type { Log, Filter } from 'ethers';

interface EventLogOptions {
  fromBlock?: number;
  toBlock?: number;
  address?: string;
}

export async function getEventLogs(
  provider: ethers.Provider | null | undefined,
  contract: ethers.Contract,
  eventName: string,
  options: EventLogOptions = {}
): Promise<Log[]> {
  const eventFragment = contract.interface.getEvent(eventName);
  
  const filter: Filter = {
    address: options.address || contract.address,
    topics: [ethers.id(eventFragment.format())], // Fixed: Use ethers.id instead of getEventTopic
    fromBlock: options.fromBlock || 0,
    toBlock: options.toBlock || 'latest'
  };

  const logs = await provider.getLogs(filter);
  return logs;
}

export function parseEventLog<T>(
  contract: ethers.Contract,
  eventName: string,
  log: Log
): T {
  const parsedLog = contract.interface.parseLog({
    topics: log.topics,
    data: log.data
  });
  
  return parsedLog?.args as T;
}

export async function getAndParseEventLogs<T>(
  provider: ethers.Provider | null | undefined,
  contract: ethers.Contract,
  eventName: string,
  options: EventLogOptions = {}
): Promise<T[]> {
  const logs = await getEventLogs(provider, contract, eventName, options);
  return logs.map(log => parseEventLog<T>(contract, eventName, log));
}