import React from 'react';
import styles from './index.module.scss';
import classnames from 'classnames';

export const SecondReadStatus = () => (
  <div>
    <div className="h1">
      <i class="fas fa-check-circle icon-lg" />
    </div>
    <div className="h3 p1">二讀</div>
  </div>
);

export const CardImage = ({ image }) => (
  <div
    className={classnames(styles.cardImage)}
    styles={{ backgroundImage: image }}
  />
);

export default ({ children, statusComponent = null }) => (
  <div className={classnames(styles.card, { [styles.withStatus]: !!statusComponent })}>
    {children}
    {statusComponent ? (
      <div className={classnames('flex-row-parent fullheight flex-center flex-middle', styles.status)}>
        {statusComponent}
      </div>
    ): null}
  </div>
);