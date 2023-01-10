import { useWallet, useWalletManager, WalletConnectionStatus } from '@marsprotocol/wallet-connector'
import Head from 'next/head'
import { useState } from 'react'

import { CosmWasmClient } from '@cosmjs/cosmwasm-stargate'
import BigNumber from 'bignumber.js'
import moment from 'moment'
import { formatValue } from '../helper/parse'
import { MarsVestingQueryClient } from '../mars-vesting/MarsVesting.client'
import { PositionResponse, VotingPowerResponse } from '../mars-vesting/MarsVesting.types'

interface Props {
  color?: string
  secondaryColor?: string
  className?: string
}

export const LogoSVG = ({ color = '#FFFFFF' }: Props) => {
  return (
    <svg
      width={110}
      height={110}
      viewBox='0 0 287 287'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M143.394 0L187.706 7.027L227.682 27.3854L259.403 59.1064L279.779 99.0823L286.807 143.394L279.779 187.707L259.403 227.683L227.682 259.403L187.707 279.78L143.394 286.807L99.0823 279.78L59.1063 259.403L27.3854 227.682L7.027 187.706L0 143.394L7.027 99.0828L27.3854 59.1067L59.1067 27.3854L99.0828 7.027L143.394 0ZM122.898 112.951L143.395 141.163L163.893 112.951H122.898ZM120.767 114.48L141.274 142.705L108.101 153.484L120.767 114.48ZM103.699 154.915L74.9249 123.643L65.0438 167.475L103.699 154.915ZM62.6199 166.303L72.4162 122.846L38.9768 133.355L62.6199 166.303ZM15.2551 140.809L35.3159 134.505L30.4971 174.971L15.2551 140.809ZM5.39193 143.909L11.9838 141.837L9.59578 170.418L5.39193 143.909ZM11.8692 184.754L11.3193 181.286L14.3357 145.184L29.4428 179.044L11.8692 184.754ZM30.2382 181.543L37.9203 217.799L14.2669 190.365L12.6796 187.248L30.2382 181.543ZM33.5734 180.459L62.1919 211.355L61.9563 171.236L33.5734 180.459ZM65.8482 169.971L99.5979 199.636L104.518 157.406L65.8482 169.971ZM98.0228 201.743L64.5853 172.353L64.8233 212.887L98.0228 201.743ZM61.1719 214.113L33.4871 184.225L41.2376 220.804L61.1719 214.113ZM37.9887 221.895L19.2632 200.176L31.4427 224.092L37.9887 221.895ZM107.099 157.918L102.185 200.095L140.809 182.408L107.099 157.918ZM142.084 184.708L103.434 202.407L142.084 225.36V184.708ZM101.562 239.591L101.902 204.547L140.214 227.3L101.562 239.591ZM101.321 264.468L101.525 243.425L138.532 260.529L101.321 264.468ZM101.221 274.808L101.288 267.883L127.851 279.031L101.221 274.808ZM142.084 281.288L138.742 280.759L105.225 266.692L142.084 262.79V281.288ZM144.706 259.3L182.92 241.63L144.706 229.458V259.3ZM144.706 262.808V281.288L148.117 280.747L181.565 266.709L144.706 262.808ZM159.009 279.02L185.551 274.811L185.484 267.909L159.009 279.02ZM185.451 264.483L185.247 243.443L148.258 260.547L185.451 264.483ZM185.209 239.607L184.87 204.565L146.575 227.301L185.209 239.607ZM183.339 202.424L144.706 225.361V184.709L183.339 202.424ZM145.98 182.408L179.69 157.918L184.588 200.112L145.98 182.408ZM182.27 157.404L187.173 199.638L220.944 169.969L182.27 157.404ZM221.95 212.908L188.735 201.757L222.204 172.353L221.95 212.908ZM245.534 220.827L225.585 214.129L253.286 184.224L245.534 220.827ZM255.334 224.117L248.78 221.916L267.555 200.141L255.334 224.117ZM274.126 187.248L272.562 190.317L248.852 217.818L256.536 181.533L274.126 187.248ZM254.025 177.959L225.649 168.74L249.031 136.156L254.025 177.959ZM221.745 167.472L183.093 154.913L211.868 123.656L221.745 167.472ZM214.378 122.866L247.803 133.369L224.17 166.303L214.378 122.866ZM251.477 134.524L271.535 140.827L256.309 174.972L251.477 134.524ZM274.805 141.855L277.191 170.54L281.411 143.931L274.805 141.855ZM275.465 181.425L274.937 184.754L257.364 179.044L272.453 145.208L275.465 181.425ZM181.288 153.002L168.418 113.368L210.053 121.756L181.288 153.002ZM168.73 110.756L192.631 77.8596L210.401 119.151L168.73 110.756ZM212.571 50.415L195.032 74.5554L233.118 87.1721L212.571 50.415ZM246.749 66.0941L214.631 47.5797L225.5 32.6206L227.913 35.0336L246.749 66.0941ZM195.29 77.4034L212.898 118.319L233.777 90.1532L195.29 77.4034ZM235.706 42.8264L254.747 61.8671L250.625 67.4273L235.706 42.8264ZM216.183 51.5008L248.585 70.1791L236.064 87.0687L216.183 51.5008ZM214.877 120.053L235.449 92.3026L247.907 130.653L214.958 120.299L215.137 120.105L214.877 120.053ZM281.131 141.094L274.743 139.087L277.058 115.408L281.131 141.094ZM274.94 102.053L275.428 105.128L272.642 133.626L263.588 105.745L274.94 102.053ZM251.709 131.848L261.761 108.611L271.308 138.007L251.709 131.848ZM252.203 69.7023L267.987 87.4966L256.181 64.335L252.203 69.7023ZM272.722 96.7865L274.135 99.5571L262.778 103.25L253.709 75.3526L272.722 96.7865ZM250.056 72.5977L259.615 102.003L237.829 89.0914L250.056 72.5977ZM253.206 180.451L224.833 171.232L224.582 211.353L253.206 180.451ZM187.49 204.328L187.73 204.438L187.7 204.175L220.416 215.16L187.825 238.844L187.49 204.328ZM188.162 273.66L188.097 266.991L211.26 261.887L188.162 273.66ZM223.356 255.722L220.541 257.157L192.619 263.31L216.347 246.074L223.356 255.722ZM187.863 242.847L213.058 245.221L188.062 263.378L187.863 242.847ZM243.685 222.972L224.21 216.433L218.675 241.14L243.685 222.972ZM227.699 251.969L225.482 254.186L218.468 244.532L242.197 227.295L227.699 251.969ZM235.074 244.595L247.104 224.12L253.426 226.243L235.074 244.595ZM142.084 259.282V229.457L103.856 241.613L142.084 259.282ZM99.0711 204.158L99.0406 204.419L99.2816 204.309L98.947 238.826L66.3378 215.145L99.0711 204.158ZM33.3412 226.221L39.6506 224.103L51.6806 244.56L33.3412 226.221ZM61.2879 254.167L59.0657 251.945L44.5615 227.281L68.2874 244.515L61.2879 254.167ZM62.5578 216.414L68.0822 241.125L43.0693 222.955L62.5578 216.414ZM98.7092 263.36L98.9082 242.83L73.6999 245.203L98.7092 263.36ZM66.1978 257.131L63.4091 255.71L70.4098 246.056L94.1507 263.291L66.1978 257.131ZM75.4785 261.861L98.6742 266.973L98.6094 273.652L75.4785 261.861ZM32.7822 177.958L61.1432 168.743L37.7601 136.157L32.7822 177.958ZM105.501 153.001L118.371 113.367L76.7367 121.739L105.501 153.001ZM91.7488 74.5412L53.6716 87.1707L74.2132 50.4063L91.7488 74.5412ZM94.1534 77.8508L76.3697 119.138L118.06 110.755L94.1534 77.8508ZM73.8807 118.287L91.4977 77.3874L53.0215 90.1493L73.8807 118.287ZM50.7303 87.0586L38.2042 70.1615L70.6081 51.4822L50.7303 87.0586ZM36.1643 67.4099L32.0498 61.8596L51.0566 42.8527L36.1643 67.4099ZM58.8494 35.06L40.0399 66.0764L72.1499 47.5665L61.2899 32.6195L58.8494 35.06ZM71.9115 120.034L51.3459 92.2925L38.8912 130.633L71.8317 120.281L71.6525 120.086L71.9115 120.034ZM30.6134 64.3255L34.5873 69.686L18.8469 87.4304L30.6134 64.3255ZM12.6769 99.546L14.1215 96.7093L33.0819 75.3348L24.0126 103.233L12.6769 99.546ZM36.7343 72.5822L27.1749 101.988L48.9691 89.0863L36.7343 72.5822ZM11.8683 102.041L23.2023 105.727L14.1476 133.609L11.3695 105.186L11.8683 102.041ZM9.73933 115.466L12.0464 139.069L5.67904 141.07L9.73933 115.466ZM15.4824 137.989L25.0287 108.593L35.0751 131.832L15.4824 137.989ZM93.8772 73.0092L76.3436 48.877L117.645 40.6951L93.8772 73.0092ZM120.176 109.206L96.2806 76.3171L141.025 72.1679L120.176 109.206ZM120.681 40.9935L141.005 69.5361L96.6628 73.648L120.681 40.9935ZM106.259 20.7384L118.452 37.862L78.4822 45.7799L106.259 20.7384ZM100.26 12.3134L104.269 17.9444L76.3021 24.5141L100.26 12.3134ZM101.814 21.2151L66.4835 29.5144L63.4119 31.0786L74.2803 46.0372L101.814 21.2151ZM145.764 72.1677L166.614 109.207L190.511 76.3156L145.764 72.1677ZM212.511 46.0369L223.378 31.0794L220.302 29.5126L184.993 21.2151L212.511 46.0369ZM210.48 24.5105L186.529 12.3134L182.522 17.9406L210.48 24.5105ZM180.538 20.7279L168.337 37.8617L208.311 45.7804L180.538 20.7279ZM166.109 40.9916L145.784 69.5358L190.145 73.648L166.109 40.9916ZM210.447 48.877L192.922 72.9976L169.147 40.6954L210.447 48.877ZM164.236 110.329L143.395 73.3041L122.553 110.329H164.236ZM143.524 68.1882L143.395 67.958L143.265 68.1888L123.239 40.0643H163.55L143.524 68.1882ZM183.74 11.7085L179.871 17.1424L158.103 7.64285L183.74 11.7085ZM144.707 5.51853L147.803 6.00956L174.043 17.4604H144.707V5.51853ZM165.867 36.8099L146.869 20.0828H177.778L165.867 36.8099ZM109.011 20.0828L120.923 36.8114L139.922 20.0828H109.011ZM106.922 17.1488L103.048 11.7085L128.7 7.64064L106.922 17.1488ZM138.992 6.00846L112.763 17.4604H142.085V5.51809L138.992 6.00846ZM166.023 114.482L145.517 142.705L178.687 153.482L166.023 114.482ZM177.894 155.982L144.706 145.199V180.092L177.894 155.982ZM142.084 180.093V145.199L108.897 155.983L142.084 180.093ZM124.175 37.4419L143.396 20.5186L162.617 37.4419H124.175ZM48.5618 92.3749L26.5161 105.425L36.683 128.943L48.5618 92.3749ZM65.5595 217.821L71.146 242.81L96.6608 240.407L65.5595 217.821ZM190.11 240.425L215.609 242.828L221.211 217.824L190.11 240.425ZM238.23 92.3774L260.275 105.442L250.109 128.944L238.23 92.3774Z'
        fill={color}
      />
    </svg>
  )
}

export default function Home() {
  const { connect, disconnect } = useWalletManager()
  const { status, signingCosmWasmClient, name, chainInfo, address } = useWallet()

  // const address = 'mars1hn5gxjz9y02m7h7ngpayfx9rs67jxgm0gj8mhs'

  const [position, setPosition] = useState<PositionResponse>()

  const [voting, setVoting] = useState<VotingPowerResponse>()

  const [userBalance, setUserBalance] = useState<string | undefined>()

  const isConnected = status === WalletConnectionStatus.Connected

  const vestingAddress = 'mars14hj2tavq8fpesdwxxcu44rty3hh90vhujrvcmstl4zr3txmfvw9smxjtde'

  const client = new MarsVestingQueryClient(signingCosmWasmClient as CosmWasmClient, vestingAddress)

  const queryPosition = async () => {
    try {
      if (!address) return
      const positionResponse = await client.position({ user: address })
      setPosition(positionResponse)
    } catch (e) {
      console.log('No Vesting Position Associated with this wallet. Try Connecting a new wallet')
      var message = 'No Vesting Position Associated with this wallet. Try Connecting a new wallet'
      alert(message)
      return true
    }
  }

  // const queryVotingPower = async () => {
  //   if (!address) return
  //   const votingResponse = await client.votingPower({user: address})
  //   setVoting(votingResponse)
  // };

  const rm = BigNumber.ROUND_HALF_CEIL

  const dp = (decimals: number, symbol?: string): number =>
    !symbol || symbol === 'uusd' ? 2 : decimals

  const lookup = (amount: number, symbol: string, decimals: number): number => {
    const value = symbol ? new BigNumber(amount).div(10 ** decimals) : new BigNumber(amount)

    return value.dp(dp(decimals, symbol), rm).toNumber()
  }

  // useEffect(() => {
  //   const interval = setInterval(async () => {
  //     const userBalances = await fetchBalances(
  //         address || "",
  //         chainInfo?.chainId
  //     );

  //     if (userBalances && userBalances.balances?.length) {
  //       setUserBalance(userBalances.balances[0].amount);
  //     } else {
  //       if (!userBalance) {
  //         setUserBalance("0");
  //       }
  //     }
  //   }, 3000);
  //   return () => clearInterval(interval);
  // }, [address, userBalance]);

  return (
    <div className='container'>
      <Head>
        <title>Mars Hub Vested Tokens</title>
        <meta
          name='This UI allows you to query you vested token position and unlocked schedule for the connect wallet'
          content='Generated by Mars Protocol'
        />
        <link rel='icon' href='/favicon.svg' />
      </Head>

      <header className='header'>
        <LogoSVG />
        <br />
        <h1>MARS PROTOCOL </h1>
      </header>

      <main className='main'>
        {isConnected ? (
          <>
            <h4>{`Connected Wallet: ${address}`}</h4>
            <p>
              {`Balance: ${lookup(
                Number(userBalance) || 0,
                chainInfo?.stakeCurrency?.coinDenom || '',
                chainInfo?.stakeCurrency?.coinDecimals || 6,
              )} MARS`}
            </p>
            <button className='button' onClick={queryPosition}>
              Get Vested Position
            </button>
            <br />
            {/* <button onClick={queryVotingPower}>Get Voting Power</button> */}
            <br />
            {position && (
              <div className='data'>
                <dl>
                  <dt>Total Token Allocation</dt>
                  <dd>
                    {formatValue(
                      (position.total as any) / 1000000,
                      0,
                      6,
                      true,
                      false,
                      ' MARS',
                      false,
                      false,
                    )}
                  </dd>
                  <dt>Total Vested</dt>
                  <dd>
                    {formatValue(
                      (position.vested as any) / 1000000,
                      0,
                      6,
                      true,
                      false,
                      ' MARS',
                      false,
                      false,
                    )}
                  </dd>
                  <dt>Unlocked</dt>
                  <dd>
                    {formatValue(position.unlocked, 0, 6, true, false, ' MARS', false, false)}
                  </dd>
                  <dt>Withdrawable</dt>
                  <dd>
                    {formatValue(position.withdrawable, 0, 6, true, false, ' MARS', false, false)}
                  </dd>
                  <dt>Withdrawn</dt>
                  <dd>
                    {formatValue(position.withdrawn, 0, 6, true, false, ' MARS', false, false)}
                  </dd>
                  <dt>Vesting Start Time</dt>
                  <dd>{moment.unix(position.vest_schedule.start_time).format('MM/DD/YYYY')}</dd>
                  <dt>Vesting Cliff</dt>
                  <dd>
                    {moment
                      .unix(position.vest_schedule.start_time + position.vest_schedule.cliff)
                      .format('MM/DD/YYYY')}{' '}
                    <span className='faded'>
                      {formatValue(
                        position.vest_schedule.cliff / 86400,
                        0,
                        0,
                        true,
                        '(',
                        ' days)',
                        true,
                      )}
                    </span>
                  </dd>
                  <dt>Vesting End</dt>
                  <dd>
                    {moment
                      .unix(position.vest_schedule.start_time + position.vest_schedule.duration)
                      .format('MM/DD/YYYY')}{' '}
                    <span className='faded'>
                      {formatValue(
                        position.vest_schedule.duration / 86400,
                        0,
                        0,
                        true,
                        '(',
                        ' days)',
                        true,
                        false,
                      )}
                    </span>
                  </dd>
                </dl>
              </div>
            )}
            <br />
            {voting && (
              <ul>
                <li>Voting Power: {voting.voting_power} </li>
              </ul>
            )}
            <br />
            <button className='button2' onClick={disconnect}>
              Disconnect
            </button>
          </>
        ) : (
          <button className='button' onClick={connect}>
            Connect Wallet
          </button>
        )}
      </main>
    </div>
  )
}
