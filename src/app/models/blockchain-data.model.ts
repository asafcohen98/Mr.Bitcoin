
export interface BlockchainData {
    status: string,
    name: number,
    unit: string,
    period: string,
    description: string,
    values: Array<{ x: number, y: number }>,
}