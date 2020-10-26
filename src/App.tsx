import React, { useState } from 'react'
import moment from 'moment'

import TextInput from './components/TextInput'
import DateInput from './components/DateInput'
import OutputCard from './components/OutputCard'
import SwitchInput from './components/SwitchInput'

import './App.css';

const calculateTotalAmount = (cost: number, reachDate: Date | string, isSaving: boolean) => {
  const endDate = moment(reachDate)
  const now = moment().startOf('month')
  const monthDiffs = Math.floor(moment.duration(endDate.diff(now)).asMonths())

  if(cost && !isSaving) {
    return { amount: cost/monthDiffs, monthDiffs }
  }
  
  if(cost && isSaving) {
    return { amount: cost*monthDiffs, monthDiffs}
  }

  return { amount: 0, monthDiffs }
}

const App = () => {
  const [isSaving, setIsSaving] = useState(false)
  const [total, setTotal] = useState(0)
  const [reachDate, setReachDate] = useState("2020-11-01")
  const [totalAmount, setTotalAmount] = useState(0)
  const [months, setMonths] = useState(0)

  const handleTotalChange = (e: any) => {
    setTotal(e.target.value)
    const { amount, monthDiffs } = calculateTotalAmount(e.target.value, reachDate, isSaving)
    setTotalAmount(amount)
    setMonths(monthDiffs)
  }

  const handleDateChange = (e: any) => {
    setReachDate(e.target.value)
    const { amount, monthDiffs } = calculateTotalAmount(total, e.target.value, isSaving)
    setTotalAmount(amount)
    setMonths(monthDiffs)
  }

  const handleSwitchChange = (checked: any) => {
    setIsSaving(checked)
    const { amount, monthDiffs } = calculateTotalAmount(total, reachDate, checked)
    setTotalAmount(amount)
    setMonths(monthDiffs)
  }

  return (
    <div>
      <div className="main-text-cont">
        <img src="./Vector.svg" className="arrow-logo"/>
        <p className="main-title">Let’s plan your saving goal</p>
      </div>
      <div className="card">
        <p className="card-title">
          Savings calculator
        </p>
        <SwitchInput
          value={isSaving}
          onChange={handleSwitchChange}
          label={isSaving ? "Calculate by monthly saving" : "Calculate by total amount"}
        />
        <TextInput
          value={total}
          onChange={handleTotalChange}
          label={isSaving ? "Monthly Amount" : "Total Amount"}
        />
        <DateInput
          value={reachDate}
          onChange={handleDateChange}
          label={isSaving ? "Save Until" : "Reach goal by"}
        />
        <OutputCard
          amount={totalAmount}
          text={isSaving
            ? `You are saving <span class="bold-text">$${total}</span> monthly to save <span class="bold-text">$${totalAmount}</span> by <span class="bold-text">${reachDate}</span>.`
            : `You are planning <span class="bold-text">${months}</span> monthly deposits to reach your <span class="bold-text">$${total}</span> goal by <span class="bold-text">${reachDate}</span>.`}
        />
      </div>
    </div>
  );
}

export default App;
