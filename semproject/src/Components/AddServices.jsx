import React,{useState} from "react";
import validator from 'validator';
 function AddServices(){
    const[stype,setStype]=useState('');
    const[sdes,setSdes]=useState('');
    const[schange,setSchange]=useState('');
    const[stime,setStime]=useState('');
    const [formData,setFormData]=useState({
      stype:'',
      sdes:'',
      schange:'',
      stime:''
    });
    const handleStypeChange=(e)=>{
      setStype(e.target.value);
    }
    const handleSdesChange=(e)=>{
      setSdes(e.target.value);
    }
    const handleSchangeChange=(e)=>{
      setSchange(e.target.value);
    }
    const handleStimeChange=(e)=>{
      setStime(e.target.value);
    }
    const [errors,setErrors]=useState({});
    const handleChange=(e)=>{
      const {stype,value}=e.target;
      setFormData({...formData,[stype]:value})
    };
    const handleSubmit=(e)=>{
      e.preventDefault();
      if (validator.isEmpty(stype)) {
        setIsFormValid(false);
        return;
      }
      if (validator.isEmpty(sdes)) {
        setIsFormValid(false);
        return;
      }
      if (validator.isEmpty(schange)) {
        setIsFormValid(false);
        return;
      }
      if (validator.isEmpty(stime)) {
        setIsFormValid(false);
        return;
      }
      

    setStype('');
    setSdes('');
    setSchange('');
    setStime('');

    }
      
      
    

    
     return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <div style={{ backgroundColor:'#B5C0D0',padding: '20px', borderRadius: '10px' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Add Services</h2>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '25px' }}>
              <label htmlFor="name"  style={{ fontSize: '0.875rem', fontWeight: '600', color: '#333' }}>Service Type</label>
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
            <div style={{ marginBottom: '25px' }}>
              <label htmlFor="s_des"  style={{ fontSize: '0.875rem', fontWeight: '600', color: '#333' }}>Service Description</label>
              <input
                id="s_des"
                name="s_des"
                type="text"
                autoComplete="current-sdes"
                required
                value={FormData.sdes}
                onChange={handleSdesChange}
                style={{ width:'90%',padding:'10px', borderRadius: '10px' }}
              />
            </div>
            <div style={{ marginBottom: '25px' }}>
              <label htmlFor="s_change"  style={{ fontSize: '0.875rem', fontWeight: '600', color: '#333' }}>Service Change</label>
              <input
                id="s_change"
                name="s_change"
                type="text"
                autoComplete="current-schange"
                required
                value={FormData.schange}
                onChange={handleSchangeChange}
                style={{ width:'90%',padding:'10px', borderRadius: '10px' }}
              />
              
            </div>
  
            <div style={{ marginBottom: '25px' }}>
              <label htmlFor="s_time" style={{ fontSize: '0.875rem', fontWeight: '600', color: '#333' }}>Service Timing</label>
              <input
                id="s_time"
                name="s_time"
                type="time"
                autoComplete="current-stime"
                required
                value={FormData.stime}
                onChange={handleStimeChange}
                style={{ width:'90%',padding:'10px', borderRadius: '10px' }}
              />
            </div>
  
            
  
            <button
              to="/admin"
              style={{
                display: 'block',
                width: '100%',
                padding: '10px',
                backgroundColor: '#',
                color: '#000000',
                borderRadius: '20px',
                textAlign: 'center',
                textDecoration: 'none',
                
              }}
            >
              Save Service
            </button>
          </form>
        </div>
      </div>

     )
 }
 export default AddServices;