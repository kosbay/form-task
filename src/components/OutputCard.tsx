import React from 'react';

interface OutputCardProps {
  amount: any
  text: string
}

const OutputCard = ({ amount, text } : OutputCardProps) => {
  const formattedAmount:any = (Math.round(amount * 100)/100).toFixed(2)

  return (
    <div className="output-card">
      <div className="output-card-body">
        <label className="card-label">Monthly amount</label>
        <p className="card-cost">${formattedAmount}</p>
      </div>
      <div className="output-card-bottom" dangerouslySetInnerHTML={{ __html: text }} />
    </div>
  );
}

export default OutputCard;
