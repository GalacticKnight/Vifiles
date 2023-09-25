import React, { useState,useEffect } from 'react'
import Cookies from 'js-cookie';
import Form from '../FormPage/Form';
import axios from 'axios';
const githubIcon = require('../images/github.png');
const websiteIcon = require('../images/website.png');
//{ list, setList, projects, setProjects, old}
/////////////////////////////////////npm i js-cookie run this in client
const Repositories = props => {
    const [list,setList]= useState([])
    useEffect(()=>{
        axios.get('http://localhost:8000/api/projects')
        .then(res =>setList(res.data))
        .catch(res => console.log(res))
    },[])

    const handleDelete = item => {
        // e.preventDefault()
        axios.delete(`http://localhost:8000/api/project/${item._id}`)
            .then( res => {
                console.log("success")
                setList(list.filter(me=>(me._id !== item._id)))//this just update your state so that you dont have to refresh and it loads in realtime.

        } )
            .catch( res => console.log(res.data.errors))
    }

    const addingLikes = item =>{
        var temp= (Cookies.get('userId')) ? Cookies.get('userId'): "000000"
        console.log(temp)
        axios.put(`http://localhost:8000/api/project/${item._id}/${temp}`)

        .then( res => {
            var dataNew=list.map(x=>  (x._id === item._id) ?{...x,likes: [...x.likes,temp]}: x );
            //it maps the the list, 
            //we checks to see if x._id === item._id matches the id in x.
            //if it does it will: return the full object. It will return the id of the person that is logged in.
            //if not it will return the object 

            setList(dataNew)
            console.log(res.data.updatedProject)
            // setList(list.filter(me=>(me._id !== id._id)))//this just update your state so that you dont have to refresh and it loads in realtime.

        } )
        .catch(res => console.log(res))
    }

    return (
        <>
        <div class="RepositorySection">
            {(!Cookies.get('userId'))?
                <div>
                    <div>
                        <h2 class=".text-dark" className='siteTitles siteHeadings '>JavaScript</h2>
                        <div className='freelanceProjects'>
                        {list.filter(e=>e.language.toLowerCase()==="javascript").map((item,idx)=>(
                            <div class="freelanceCard">
                                <h6 class="text-primary">{item.name}</h6>
                                <h6 class="text-light">{item.desc}</h6>
                                {/* {item.likes} */}
                                <h6 class="text-primary">Likes: {item.likes.length}</h6>
                                {/* {item.likes.map((x) => (<p>{x}</p>))} */}
                                {/* {item.likes} */}
                                {/* Like Button */}
                                {/* <button disabled={(Cookies.get('userId') && item.likes.includes(Cookies.get('userId') )) ? true:false  } onClick={()=>addingLikes(item)}>Like {(item.likes.length)? item.likes.length:0}  </button> */}

                                {(item.url ===null)?
                                null
                                :
                                <a href={item.url} target="_blank" rel="noreferrer">
                                    
                                    <img class='RepositoryIcons' src={websiteIcon}  alt="web icon" />
                                </a>
                                }
                                {(item.gitUrl ===null)?
                                null
                                :
                                <a href={item.gitUrl} target="_blank" rel="noreferrer">
                                    
                                    <img class='RepositoryIcons' src={githubIcon}  alt="web icon" />
                                </a>
                                }
                            </div>
                        ))}
                        </div>
                    </div>
                    <div>
                        <h2 class=".text-dark" className='siteTitles siteHeadings '>TypeScript</h2>
                        <div className='freelanceProjects'>
                        {list.filter(e=>e.language.toLowerCase()==="typescript").map((item,idx)=>(
                            <div class="freelanceCard">
                                <h6 class="text-primary">{item.name}</h6>
                                <h6 class="text-light">{item.desc}</h6>
                                {/* {item.likes} */}
                                <h6 class="text-primary">Likes: {item.likes.length}</h6>                                {/* {item.likes.map((x) => (<p>{x}</p>))} */}
                                {/* <button disabled={(Cookies.get('userId') && item.likes.includes(Cookies.get('userId') )) ? true:false  } onClick={()=>addingLikes(item)}>Like</button> */}
                                {/* Like Button */}
                                {/* <button disabled={(Cookies.get('userId') && item.likes.includes(Cookies.get('userId') )) ? true:false  } onClick={()=>addingLikes(item)}>Like {(item.likes.length)? item.likes.length:0}  </button> */}
                                {(item.url ===null)?
                                null
                                :
                                <a href={item.url} target="_blank" rel="noreferrer">
                                    
                                    <img class='RepositoryIcons' src={websiteIcon}  alt="web icon" />
                                </a>
                                }
                                {(item.gitUrl ===null)?
                                null
                                :
                                <a href={item.gitUrl} target="_blank" rel="noreferrer">
                                    
                                    <img class='RepositoryIcons' src={githubIcon}  alt="web icon" />
                                </a>
                                }
                            </div>
                        ))}
                        </div>
                    </div>
                    <div>
                        <h2 class=".text-dark" className='siteTitles siteHeadings '>Python</h2>
                        <div className='freelanceProjects'>
                        {list.filter(e=>e.language.toLowerCase()==="python").map((item,idx)=>(
                            <div class="freelanceCard">
                                <h6 class="text-primary">{item.name}</h6>
                                <h6 class="text-light">{item.desc}</h6>
                                {/* {item.likes} */}
                                <h6 class="text-primary">Likes: {item.likes.length}</h6>                                {/* {item.likes.map((x) => (<p>{x}</p>))} */}
                                {/* <button disabled={(Cookies.get('userId') && item.likes.includes(Cookies.get('userId') )) ? true:false  } onClick={()=>addingLikes(item)}>Like</button> */}
                                {/* Like Button */}
                                {/* <button disabled={(Cookies.get('userId') && item.likes.includes(Cookies.get('userId') )) ? true:false  } onClick={()=>addingLikes(item)}>Like {(item.likes.length)? item.likes.length:0}  </button> */}
                                {(item.url ===null)?
                                null
                                :
                                <a href={item.url} target="_blank" rel="noreferrer">
                                    
                                    <img class='RepositoryIcons' src={websiteIcon}  alt="web icon" />
                                </a>
                                }
                                {(item.gitUrl ===null)?
                                null
                                :
                                <a href={item.gitUrl} target="_blank" rel="noreferrer">
                                    
                                    <img class='RepositoryIcons' src={githubIcon}  alt="web icon" />
                                </a>
                                }
                            </div>
                        ))}
                        </div>
                    </div>
                    <div>
                        <h2 class=".text-dark" className='siteTitles siteHeadings '>Other</h2>
                        <div className='freelanceProjects'>
                        {list.filter(e=>!["python","typescript","javascript"].includes(e.language.toLowerCase())).map((item,idx)=>(
                            <div class="freelanceCard">
                                <h6 class="text-primary">{item.name}</h6>
                                <h6 class="text-light">{item.desc}</h6>
                                {/* {item.likes} */}
                                <h6 class="text-primary">Likes: {item.likes.length}</h6>                                {/* <button disabled={(Cookies.get('userId') && item.likes.includes(Cookies.get('userId') )) ? true:false  } onClick={()=>addingLikes(item)}>Like</button> */}
                                {/* Like Button */}
                                {/* <button disabled={(Cookies.get('userId') && item.likes.includes(Cookies.get('userId') )) ? true:false  } onClick={()=>addingLikes(item)}>Like {(item.likes.length)? item.likes.length:0}  </button> */}
                                {(item.url ===null)?
                                null
                                :
                                <a href={item.url} target="_blank" rel="noreferrer">
                                    
                                    <img class='RepositoryIcons' src={websiteIcon}  alt="web icon" />
                                </a>
                                }
                                {(item.gitUrl ===null)?
                                null
                                :
                                <a href={item.gitUrl} target="_blank" rel="noreferrer">
                                    
                                    <img class='RepositoryIcons' src={githubIcon}  alt="web icon" />
                                </a>
                                }
                            </div>
                        ))}
                        </div>
                    </div>
                </div>
            :
                <div class="RepositorySection">

                {(Cookies.get('userId')==="6511c6c9add4f1b2bbec10ab")? 
                    <div>
                        <div>
                            <h2 class=".text-dark" className='siteTitles siteHeadings '>JavaScript</h2>
                            {list.filter(e=>e.language.toLowerCase()==="javascript").map((item,idx)=>(
                                <div>
                                    <Form old={item}/>
                                    <button class="RepositoryButton" onClick={()=>handleDelete(item)}>Delete</button>
                                </div>
                            ))}
                        </div>
                        <div>
                            <h2 class=".text-dark" className='siteTitles siteHeadings '>TypeScript</h2>
                            {list.filter(e=>e.language.toLowerCase()==="typescript").map((item,idx)=>(
                                <div>
                                    <Form old={item}/>
                                    <button class="RepositoryButton" onClick={()=>handleDelete(item)}>Delete</button>
                                </div>
                            ))}
                        </div>
                        <div>
                            <h2 class=".text-dark" className='siteTitles siteHeadings '>Python</h2>
                            {list.filter(e=>e.language.toLowerCase()==="python").map((item,idx)=>(
                                <div>
                                    <Form old={item}/>
                                    <button onClick={()=>handleDelete(item)}>Delete</button>
                                    
                                </div>
                            ))}
                        </div>
                        <div>
                            <h2 class=".text-dark" className='siteTitles siteHeadings '>Other</h2>
                            {list.filter(e=>!["python","typescript","javascript"].includes(e.language.toLowerCase())).map((item,idx)=>(
                                <div>
                                    <Form old={item}/>
                                    <button onClick={()=>handleDelete(item)}>Delete</button>

                                </div>
                            ))}
                        </div>
                    </div>
                :
                    <div>
                        <div>
                            <h2 class=".text-dark" className='siteTitles siteHeadings '>JavaScript</h2>
                            <div className='freelanceProjects'>
                            {list.filter(e=>e.language.toLowerCase()==="javascript").map((item,idx)=>(
                                <div class="freelanceCard">
                                    <h6 class="text-primary">{item.name}</h6>
                                    <h6 class="text-light">{item.desc}</h6>
                                    <h6 class="text-primary">Likes: {item.likes.length}</h6>
                                    <button class="btn btn-primary" disabled={(Cookies.get('userId') && item.likes.includes(Cookies.get('userId') )) ? true:false  } onClick={()=>addingLikes(item)}>Like</button>
                                    {/* {item.likes.map((x) => (<p>{x}</p>))} */}
                                    {/* {item.likes} */}
                                    {/* Like Button */}
                                    {/* <button disabled={(Cookies.get('userId') && item.likes.includes(Cookies.get('userId') )) ? true:false  } onClick={()=>addingLikes(item)}>Like {(item.likes.length)? item.likes.length:0}  </button> */}

                                {(item.url ===null)?
                                    null
                                :
                                    <a href={item.url} target="_blank" rel="noreferrer">
                                        
                                        <img class='RepositoryIcons' src={websiteIcon}  alt="web icon" />
                                    </a>
                                }
                                {(item.gitUrl ===null)?
                                    null
                                :
                                    <a href={item.gitUrl} target="_blank" rel="noreferrer">
                                        
                                        <img class='RepositoryIcons' src={githubIcon}  alt="web icon" />
                                    </a>
                                }
                                </div>
                            ))}
                            </div>
                        </div>
                        <div>
                            <h2 class=".text-dark" className='siteTitles siteHeadings '>TypeScript</h2>
                            <div className='freelanceProjects'>
                            {list.filter(e=>e.language.toLowerCase()==="typescript").map((item,idx)=>(
                                <div class="freelanceCard">
                                    <h6 class="text-primary">{item.name}</h6>
                                    <h6 class="text-light">{item.desc}</h6>
                                    <h6 class="text-primary">Likes: {item.likes.length}</h6>
                                    <button class="btn btn-primary" disabled={(Cookies.get('userId') && item.likes.includes(Cookies.get('userId') )) ? true:false  } onClick={()=>addingLikes(item)}>Like</button>
                                    {/* {item.likes.map((x) => (<p>{x}</p>))} */}
                                    {/* {item.likes} */}
                                    {/* Like Button */}
                                    {/* <button disabled={(Cookies.get('userId') && item.likes.includes(Cookies.get('userId') )) ? true:false  } onClick={()=>addingLikes(item)}>Like {(item.likes.length)? item.likes.length:0}  </button> */}

                                    {(item.url ===null)?
                                        null
                                    :
                                        <a href={item.url} target="_blank" rel="noreferrer">
                                            
                                            <img class='RepositoryIcons' src={websiteIcon}  alt="web icon" />
                                        </a>
                                    }
                                    {(item.gitUrl ===null)?
                                        null
                                    :
                                        <a href={item.gitUrl} target="_blank" rel="noreferrer">
                                            
                                            <img class='RepositoryIcons' src={githubIcon}  alt="web icon" />
                                        </a>
                                    }
                                </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h2 class=".text-dark" className='siteTitles siteHeadings '>Python</h2>
                            <div className='freelanceProjects'>
                            {list.filter(e=>e.language.toLowerCase()==="python").map((item,idx)=>(
                                <div class="freelanceCard">
                                    <h6 class="text-primary">{item.name}</h6>
                                    <h6 class="text-light">{item.desc}</h6>
                                    <h6 class="text-primary">Likes: {item.likes.length}</h6>
                                    <button class="btn btn-primary" disabled={(Cookies.get('userId') && item.likes.includes(Cookies.get('userId') )) ? true:false  } onClick={()=>addingLikes(item)}>Like</button>
                                    {/* {item.likes.map((x) => (<p>{x}</p>))} */}
                                    {/* {item.likes} */}
                                    {/* Like Button */}
                                    {/* <button disabled={(Cookies.get('userId') && item.likes.includes(Cookies.get('userId') )) ? true:false  } onClick={()=>addingLikes(item)}>Like {(item.likes.length)? item.likes.length:0}  </button> */}
                                    
                                    {(item.url ===null)?
                                        null
                                    :
                                        <a href={item.url} target="_blank" rel="noreferrer">
                                            
                                            <img class='RepositoryIcons' src={websiteIcon}  alt="web icon" />
                                        </a>
                                    }
                                    {(item.gitUrl ===null)?
                                        null
                                    :
                                        <a href={item.gitUrl} target="_blank" rel="noreferrer">
                                            
                                            <img class='RepositoryIcons' src={githubIcon}  alt="web icon" />
                                        </a>
                                    }


                                </div>
                            ))}
                            </div>
                        </div>
                        
                        <div>
                            <h2 class=".text-dark" className='siteTitles siteHeadings '>Other</h2>
                            <div className='freelanceProjects'>
                            {list.filter(e=>!["python","typescript","javascript"].includes(e.language.toLowerCase())).map((item,idx)=>(
                                <div class="freelanceCard">
                                    <h6 class="text-primary">{item.name}</h6>
                                    <h6 class="text-light">{item.desc}</h6>
                                    <h6 class="text-primary">Likes: {item.likes.length}</h6>
                                    <button class="btn btn-primary" disabled={(Cookies.get('userId') && item.likes.includes(Cookies.get('userId') )) ? true:false  } onClick={()=>addingLikes(item)}>Like</button>
                                    {/* {item.likes.map((x) => (<p>{x}</p>))} */}
                                    {/* {item.likes} */}
                                    {/* Like Button */}
                                    {/* <button disabled={(Cookies.get('userId') && item.likes.includes(Cookies.get('userId') )) ? true:false  } onClick={()=>addingLikes(item)}>Like {(item.likes.length)? item.likes.length:0}  </button> */}
                                    
                                    {(item.url ===null)?
                                        null
                                    :
                                        <a href={item.url} target="_blank" rel="noreferrer">
                                            
                                            <img class='RepositoryIcons' src={websiteIcon}  alt="web icon" />
                                        </a>
                                    }
                                    {(item.gitUrl ===null)?
                                        null
                                    :
                                        <a href={item.gitUrl} target="_blank" rel="noreferrer">
                                            
                                            <img class='RepositoryIcons' src={githubIcon}  alt="web icon" />
                                        </a>
                                    }

                                </div>
                            ))}
                            </div>
                        </div>
                    </div>
                }
                </div>
            }   
        </div>
        </>
    )
}

export default Repositories