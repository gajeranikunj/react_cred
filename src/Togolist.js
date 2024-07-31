import React, { useRef, useState } from 'react'

function Togolist() {
    const [data, setdata] = useState([]);
    const [inputdata, setinputdata] = useState("");
    const [togal, settogal] = useState(null);
    const inputRef = useRef(null);

    return (
        <>
            <div className='cinter'>

                <div className='cas'>
                    <div>
                        <input ref={inputRef} type="text" value={inputdata} onChange={(e) => { setinputdata(e.target.value) }} />
                        <button style={{ padding: "5px 15px" }} onClick={() => {
                            if (inputdata.length > 0) {
                                if (togal == null) {
                                    setdata([...data, inputdata])
                                    setinputdata("")
                                } else {
                                    var cdat = [...data];
                                    cdat[togal] = inputdata;
                                    setdata(cdat);
                                    setinputdata("")
                                    settogal(null);
                                }
                            }
                        }}>Add</button>
                    </div>
                </div>
                <div className='col'>
                    {data.map((item, index) => (
                        <div key={index} className='all'>
                            <div>
                                {`(${index + 1})`}
                                {item}
                            </div>
                            <div>
                                <button className='m' onClick={() => {
                                    var cdat = [...data];
                                    cdat.splice(index, 1);
                                    setdata(cdat)
                                }}>delet</button>
                                <button className='m' onClick={() => {
                                    inputRef.current.focus();
                                    setinputdata(data[index])
                                    settogal(index);
                                }}>update</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Togolist