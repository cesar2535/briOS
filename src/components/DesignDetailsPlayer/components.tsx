import React from 'react';
import { podcasts } from '../../data';
import { SubscriptionsContainer } from '../SubscriptionButtons/style';
import SubscriptionButtons from '../SubscriptionButtons';

export const PlayerFooter = () => (
  <SubscriptionsContainer isVisible isFooter>
    <SubscriptionButtons podcast={podcasts[0]} />
  </SubscriptionsContainer>
);
