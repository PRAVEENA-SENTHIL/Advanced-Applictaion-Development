import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import validator from 'validator';


function Payment() {
    const[isFormValid, setIsFormValid] = useState(false)
    const [cid,setCid]=useState('');
    const [totamt,setTotamt]=useState('');
    const [bid,setBid]=useState('');
    const [mop,setMop]=useState('');
    const [pdate,setPdate]=useState('');
    const [formData,setFormData]=useState({
        cid:'',
        totamt:'',
        bid:'',
        mop:'',
        pdate:''

    });
    const handleCidChange=(e)=>{
        setCid(e.target.value);
    }
    const handleTotamtChange=(e)=>{
        setTotamt(e.target.value);
    }
    const handleBidChange=(e)=>{
        setBid(e.target.value);
    }
    const handleMopChange=(e)=>{
        setMop(e.target.value);
    }
    const handlePdateChange=(e)=>{
        setPdate(e.target.value);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(validator.isEmpty(cid)){
            setIsFormValid(false);
            return;
        }
        if(validator.isEmpty(totamt)){
            setIsFormValid(false);
            return;
        }
        if(validator.isEmpty(bid)){
            setIsFormValid(false);
            return;
        }
        if(validator.isEmpty(mop)){
            setIsFormValid(false);
            return;
        }
        if(validator.isEmpty(pdate)){
            setIsFormValid(false);
            return;
        }
        
        setCid('');
        setTotamt('');
        setBid('');
        setMop('');
        setPdate('');
    }
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData({
          ...formData,
          [name]: value
      });
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <div style={{ backgroundColor:'#B5C0D0',padding: '60px', borderRadius: '10px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px',fontWeight:'bold',fontSize:'larger' }}>Payment</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '25px' }}>
          <label htmlFor="c_id"  style={{ fontSize: '0.875rem',fontSize:'20px', fontWeight: '600', color: '#333' ,}}>Customer Id</label>
          <input
            id="c_id"
            name="c_id"
            type="number"
            autoComplete="current-c_id"
            required
            value={FormData.cid}
            onChange={handleCidChange}
            style={{ width:'90%',padding:'10px', borderRadius: '10px' }}
          />
          
        </div>
        <div style={{ marginBottom: '25px' }}>
          <label htmlFor="tot_amt"  style={{ fontSize: '0.875rem', fontSize:'20px', fontWeight: '600', color: '#333' }}>Total Amount</label>
          <input
            id="tot_amt"
            name="tot_amt"
            type="number"
            autoComplete="current-totamt"
            required
            value={FormData.totamt}
            onChange={handleTotamtChange}
            style={{ width:'90%',padding:'10px', borderRadius: '10px' }}
          />
        </div>
        <div style={{ marginBottom: '25px' }}>
          <label htmlFor="b_id"  style={{ fontSize: '0.875rem',fontSize:'20px', fontWeight: '600', color: '#333' }}>Booking ID</label>
          <input
            id="b_id"
            name="b_id"
            type="number"
            autoComplete="current-bid"
            required
            value={FormData.bid}
            onChange={handleBidChange}
            style={{ width:'90%',padding:'10px', borderRadius: '10px' }}
          />
          
        </div>

        <div style={{ marginBottom: '25px' }}>
          <label htmlFor="mod" style={{ fontSize: '0.875rem', fontSize:'20px',fontWeight: '600', color: '#333' }}>Mode Of Payment</label>
          <select
                            id="mod"
                            name="mop"
                            autoComplete="current-mod"
                            required
                            value={formData.mop}
                            onChange={handleInputChange}
                            style={{ width: '90%', padding: '10px', borderRadius: '10px' }}
                        >
                            <option value="">Select Payment Mode</option>
                            <option value="Credit Card">Credit Card</option>
                            <option value="Debit Card">Debit Card</option>
                            <option value="Net Banking">Net Banking</option>
                            </select>
        </div>
        <div style={{ marginBottom: '25px' }}>
          <label htmlFor="p_date" style={{ fontSize: '0.875rem',fontSize:'20px' ,fontWeight: '600', color: '#333' }}>Paymet Date</label>
          <input
            id="p_date"
            name="p_date"
            type="date"
            autoComplete="current-pdate"
            required
            value={FormData.pdate}
            onChange={handlePdateChange}
            style={{ width:'90%',padding:'10px', borderRadius: '10px' }}
          />
        </div>

        

        <Link
        type="submit"
          to="/"
          style={{
            display: 'block',
            width: '100%',
            padding: '10px',
            backgroundColor: '#272829',
            color: '#fff',
            cursor:'pointer',
            borderRadius: '20px',
            textAlign: 'center',
            textDecoration: 'none',
            
          }}
        >
          Confirm Payment
        </Link>
      </form>
    </div>
  </div>

    
  )
}

export default Payment