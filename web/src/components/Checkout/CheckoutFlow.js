import { useEffect } from 'react'
import { routes, Link } from '@redwoodjs/router'

import {
  useCheckout,
  PHASE,
  SetCustomer,
  SetShipping,
  SetPayment,
} from 'src/components/Checkout'

import { Loader } from '../UI'

export const CheckoutFlow = () => {
  const { checkout, initCheckout } = useCheckout()

  useEffect(() => {
    initCheckout()
  }, [])

  return (
    <div className="checkout-flow">
      {checkout.loading ? (
        <Loader type="BLOCK" />
      ) : checkout.phase === PHASE.SET_CUSTOMER ? (
        <SetCustomer />
      ) : checkout.phase === PHASE.SET_SHIPPING ? (
        <SetShipping />
      ) : checkout.phase === PHASE.SET_PAYMENT ? (
        <SetPayment />
      ) : (
        <Default />
      )}
    </div>
  )
}

const Default = () => (
  <p>
    Something went wrong. Please <Link to={routes.cart()}>try again</Link>.
  </p>
)
