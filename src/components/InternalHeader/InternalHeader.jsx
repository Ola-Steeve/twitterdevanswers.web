/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useEffect, useState } from 'react';
import { HiOutlineXCircle, HiBars3CenterLeft } from 'react-icons/hi2';
import { Link, NavLink } from 'react-router-dom';
import { ReactComponent as HomeIcon } from '../../assets/home.svg';
import { ReactComponent as TagIcon } from '../../assets/tagIcon.svg';
import { ReactComponent as UsersIcon } from '../../assets/user.svg';
import { ReactComponent as WalletIcon } from '../../assets/wallet.svg';
import { ReactComponent as SortIcon } from '../../assets/sort.svg';
import { ReactComponent as SettingsIcon } from '../../assets/settings.svg';
import { ReactComponent as NotificationIcon } from '../../assets/notification.svg';
import { ReactComponent as SearchIcon } from '../../assets/search.svg';
import avatar from '../../assets/avatar.svg';
import brandLogo from '../../assets/brand-logo.svg';
import styles from './internalHeader.module.css';

//  header component for internal pages
export default function InternalHeader(props) {
	const [sidenav, setSidenav] = useState(false);
	const[userState,setUserState]=useState('online')

	// prevent scroll if sidenav is open
	useEffect(() => {
		if (!sidenav) {
			document.body.style.overflowY = 'scroll';
		} else {
			document.body.style.overflowY = 'hidden';
		}
	}, [sidenav]);

	// add isActive classname if Navlink is active to style active state
	const activeStyle = ({ isActive }) =>
		isActive ? styles.isActive : undefined;

	// open and close sidenav
	const hadnleClick = () => setSidenav((prev) => !prev);

	const linkStyle = {
		textDecoration: 'none',
		fontWeight: '500',
		fontSize: '18px',
		lineHeight: '28px',
		color: '#4343de',
	};

	useEffect(()=>{
		const activity = setInterval(() =>{
			if(props.activeState === true){
				const activityState = localStorage.getItem('userActivity')
			setUserState(activityState)
		}
			
		},[400])

		return()=> clearInterval(activity)
		
	},[])

	return (
		<div className={styles.headerContainer}>
			<div className={`${styles.header} lpContainer`}>
				<div className={styles.left}>
					<Link to="/" className={styles.brand}>
						<img src={brandLogo} alt="brand logo" />
						<span>DevAsk</span>
					</Link>
					<div className={styles.search}>
						<SearchIcon />
						<input type="text" placeholder="Search questions..." />
					</div>
				</div>

				<div className={styles.right}>
					<ul className={styles.links}>
						<li>
							<NavLink to="/" style={linkStyle} className={activeStyle}>
								<div className={styles.link}>
									<HomeIcon className={styles.icon} />
									<span>Home</span>
								</div>
							</NavLink>
						</li>

						<li>
							<NavLink
								to="/tags-page"
								style={linkStyle}
								className={activeStyle}
							>
								<div className={styles.link}>
									<TagIcon className={styles.icon} /> <span>Tag</span>
								</div>
							</NavLink>
						</li>
						<li>
							<NavLink
								style={linkStyle}
								to="/users-page"
								className={activeStyle}
							>
								<div className={styles.link}>
									<UsersIcon className={styles.icon} /> <span>Users</span>
								</div>
							</NavLink>
						</li>
						<li>
							<NavLink to="/wallet" style={linkStyle} className={activeStyle}>
								<div className={styles.link}>
									<WalletIcon className={styles.icon} /> <span>Wallet</span>
								</div>
							</NavLink>
						</li>
						<li>
							<NavLink to="/settings" style={linkStyle} className={activeStyle}>
								<div className={styles.link}>
									<SettingsIcon className={styles.icon} /> <span>Settings</span>
								</div>
							</NavLink>
						</li>
					</ul>
					<div className={styles.rest}>
						<NavLink to="/notifications-page" className={activeStyle}>
							<NotificationIcon className={styles.icon} />
						</NavLink>
						<SortIcon className={styles.sortIcon} />
						<div className={styles.user}>
							<div className={styles.avatar} aria-hidden={props.activeState} >
								<img src={avatar}  alt="avatar" />
							</div>
							<div className={styles.nameStatus}>
								<p>Kayla Nicole</p>
								<span>{userState}</span>
							</div>
						</div>
						<HiBars3CenterLeft
							className={styles.hamburger}
							onClick={hadnleClick}
						/>
					</div>

					{/* SideNav for small laptops and tabs */}
					<div className={`${styles.sidenav} ${sidenav && styles.active}`}>
						<div className={styles.snBrand}>
							<Link to="/" className={styles.brand}>
								<img src={brandLogo} alt="brand logo" />
								<span>DevAsk</span>
							</Link>

							<span className={styles.close}>
								<HiOutlineXCircle onClick={hadnleClick} />
							</span>
						</div>

						<ul className={styles.snLinks}>
							<li>
								<NavLink to="/" style={linkStyle} className={activeStyle}>
									<div className={styles.snLink}>
										<HomeIcon className={styles.snIcon} />
										<span>Home</span>
									</div>
								</NavLink>
							</li>

							<li>
								<NavLink
									to="/tags-page"
									style={linkStyle}
									className={activeStyle}
								>
									<div className={styles.snLink}>
										<TagIcon className={styles.snIcon} /> <span>Tag</span>
									</div>
								</NavLink>
							</li>
							<li>
								<NavLink
									style={linkStyle}
									to="/users-page"
									className={activeStyle}
								>
									<div className={styles.snLink}>
										<UsersIcon className={styles.snIcon} /> <span>Users</span>
									</div>
								</NavLink>
							</li>
							<li>
								<NavLink to="/wallet" style={linkStyle} className={activeStyle}>
									<div className={styles.snLink}>
										<WalletIcon className={styles.snIcon} /> <span>Wallet</span>
									</div>
								</NavLink>
							</li>
							<li>
								<NavLink
									to="/settings"
									style={linkStyle}
									className={activeStyle}
								>
									<div className={styles.snLink}>
										<SettingsIcon className={styles.snIcon} />{' '}
										<span>Settings</span>
									</div>
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
