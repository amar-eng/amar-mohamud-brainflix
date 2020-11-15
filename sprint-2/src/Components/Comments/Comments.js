// import React, { Component } from 'react';
// import './Comments.scss'

// class Comments extends Component {
//     constructor(){
//         super();
//         this.state = {
//             profile:[
//             {
//                 id: 213, 
//                 name: 'Micheal Lyons',
//                 date: '12/18/2018',
//                 text: 'They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.'
                
//             },
//             {
//                 id: 214, 
//                 name: 'Gary Wong',
//                 date: '12/12/2018',
//                 text: 'Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!'
                
//             },
//             {
//                 id: 215, 
//                 name: 'Theodore Duncan',
//                 date: '11/15/2018',
//                 text: 'How can someone be so good!!! You can tell he lives for this and loves to do it every day.Everytime I see him I feel instantly happy! He’s definitely my favorite ever!'
                
//             }
    
//             ]}
    
// }
    
//     render() {
        
//         return (
//         <section className = "comment">{
//             this.state.profile.map((item)=>{
//                 console.log(item.image)
//                 return (
//                     <div className = "comments">
//                         <div className = "comments__profile">
//                             <div className = "comments__icon"></div>
//                              <h3 className= "comments__name">{item.name}</h3>
//                              <h3 className= "comments__date">{item.date}</h3>
//                         </div>
//                         <div className = "comments__text">
//                             <h3>{item.text}</h3>
                            
//                         </div>
//                         <hr/>
//                     </div>
                
//                 )
//             })
//         }
            
//         </section>
//         )
        
//     }
        

        
// }

// export default Comments;

import React from 'react';
import './Comments.scss'
function Comments(props) {
    return (
        <section className = "comment">{
            props.detailsdata.map((item)=>{
               
                return (
                    <div className = "comments">
                        <div className = "comments__profile">
                            <div className = "comments__icon"></div>
                                <h3 className= "comments__name">{item.name}</h3>
                                <h3 className= "comments__date">{item.date}</h3>
                        </div>
                        <div className = "comments__text">
                            <h3>{item.text}</h3>
                            
                        </div>
                        <hr/>
                    </div>
                
                )
            })
        }
                        
        </section>
    );
}

export default Comments;