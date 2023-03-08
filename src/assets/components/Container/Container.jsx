import style from './Container.module.css'
import classNames from 'classnames';

export const Container = ({ className }) => {
	return (
		<div className={classNames(style.container, className)}></div>
	)

}