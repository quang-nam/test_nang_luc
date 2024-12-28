import "./TransactionSection.css";
function TransactionSection() {
  return (
    <div className='transaction-section'>
      <div className='transaction-title'>
        <span className='transaction-name'>Giao dịch gần đây</span>
        <button className='transaction-btn'>Xem thêm</button>
      </div>
      <div className='transaction-body'>
        <p>Chưa có giao dịch nào gần đây</p>
      </div>
    </div>
  );
}

export default TransactionSection;
