import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import validator from 'validator';


function Booking() {
    const[isFormValid, setIsFormValid] = useState(false)
    const[cid,setCid]=useState('');
    const[subdate,setSubdate]=useState('');
    const[sdes,setSdes]=useState('');
    const[stype,setStype]=useState('');
    const [formData,setFormData]=useState({
      cid:'',
      subdate:'',
      sdes:'',
      stype:''
      
    });
    const handleCidChange=(e)=>{
      setCid(e.target.value);
    }
    const handleSubdateChange=(e)=>{
      setSubdate(e.target.value);
    }
    const handleSdesChange=(e)=>{
      setSdes(e.target.value);
    }
    const handleStypeChange=(e)=>{
      setStype(e.target.value);
    }
    const [errors,setErrors]=useState({});
    const handleChange=(e)=>{
      const {cid,value}=e.target;
      setFormData({...formData,[cid]:value})
    };
    const handleSubmit=(e)=>{
      e.preventDefault();
      if (validator.isEmpty(cid)) {
        setIsFormValid(false);
        return;
      }
      if (validator.isEmpty(subdate)) {
        setIsFormValid(false);
        return;
      }
      if (validator.isEmpty(sdes)) {
        setIsFormValid(false);
        return;
      }
      if (validator.isEmpty(stype)) {
        setIsFormValid(false);
        return;
      }
      

    setCid('');
    setSubdate('');
    setSdes('');
    setStype('');

    }
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <div style={{ backgroundColor:'#B5C0D0',padding: '80px', borderRadius: '10px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '50px',fontSize:'larger',fontWeight:'bold' }}>Booking Form</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '25px' }}>
          <label htmlFor="c_id"  style={{ fontSize: '0.875rem',fontSize:'20px', fontWeight: '600', color: '#333' }}>Customer Id</label>
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
          <label htmlFor="sub_date"  style={{ fontSize: '0.875rem',fontSize:'20px', fontWeight: '600', color: '#333' }}>Submission Date</label>
          <input
            id="sub_date"
            name="sub_date"
            type="date"
            autoComplete="current-sub_date"
            required
            value={FormData.subdate}
            onChange={handleSubdateChange}
            style={{ width:'90%',padding:'10px', borderRadius: '10px' }}
          />
        </div>
        <div style={{ marginBottom: '25px' }}>
          <label htmlFor="s_des"  style={{ fontSize: '0.875rem',fontSize:'20px', fontWeight: '600', color: '#333' }}>Description</label>
          <input
            id="s_des"
            name="s_des"
            type="text"
            autoComplete="current-sdes"
            required
            value={FormData.schange}
            onChange={handleSdesChange}
            style={{ width:'90%',padding:'10px', borderRadius: '10px' }}
          />
          
        </div>

        <div style={{ marginBottom: '25px' }}>
          <label htmlFor="s_time" style={{ fontSize: '0.875rem',fontSize:'20px', fontWeight: '600', color: '#333' }}>Service Type</label>
          <input
            id="s_type"
            name="s_type"
            type="text"
            autoComplete="current-stype"
            required
            value={FormData.stype}
            onChange={handleStypeChange}
            style={{ width:'90%',padding:'10px', borderRadius: '10px' }}
          />
        </div>

        

        <Link
          to="/payment"
          style={{
            display: 'block',
            width: '100%',
            padding: '10px',
            marginTop:'30px',
            marginLeft:'-5px',
            backgroundColor: '#272829',
            color: '#fff',
            cursor:'pointer',
            borderRadius: '20px',
            textAlign: 'center',
            textDecoration: 'none',
            
          }}
        >
          Submit Booking
        </Link>
      </form>
    </div>
  </div>

    
  )
}

export default Booking
