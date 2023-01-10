// @ts-nocheck
/**
 * This file was automatically generated by @cosmwasm/ts-codegen@0.19.0.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run the @cosmwasm/ts-codegen generate command to regenerate this file.
 */

export interface InstantiateMsg {
  owner: string
  unlock_schedule: Schedule
}
export interface Schedule {
  cliff: number
  duration: number
  start_time: number
}
export type ExecuteMsg =
  | {
      create_position: {
        user: string
        vest_schedule: Schedule
      }
    }
  | {
      terminate_position: {
        user: string
      }
    }
  | {
      withdraw: {}
    }
  | {
      transfer_ownership: string
    }
export type QueryMsg =
  | {
      config: {}
    }
  | {
      voting_power: {
        user: string
      }
    }
  | {
      voting_powers: {
        limit?: number | null
        start_after?: string | null
      }
    }
  | {
      position: {
        user: string
      }
    }
  | {
      positions: {
        limit?: number | null
        start_after?: string | null
      }
    }
export type Uint128 = string
export interface PositionResponse {
  total: Uint128
  unlocked: Uint128
  user: string
  vest_schedule: Schedule
  vested: Uint128
  withdrawable: Uint128
  withdrawn: Uint128
}
export type ArrayOfPositionResponse = PositionResponse[]
export interface VotingPowerResponse {
  user: string
  voting_power: Uint128
}
export type ArrayOfVotingPowerResponse = VotingPowerResponse[]
