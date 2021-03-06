import React from 'react'
import BigNumber from 'bignumber.js'
import WarningBar from './warningbar.js'

const Header = ({ numContracts, earned, expected, walletsize, walletLocked }) => (
	<header className="header">
		<div className="title">Hosting</div>
		<div className="capsule">
			<div className="pod" id="contacts">{numContracts} active contracts</div>
			<div className="pod" id="money">{earned} SC earned</div>
			<div className="pod" id="expected">{expected} SC expected</div>
		</div>
		{
			(new BigNumber(walletsize)).lessThan('20000') && !walletLocked ?
				<WarningBar title="Wallet balance too low." message="You must have at least 20,000 SC to host files." />
				: null
		}
	</header>
)

export default Header
