     let H2=document.createElement("h2");
     let IMG=document.createElement("img");
     let Btn1=document.createElement("button");

     Btn1.setAttribute("id","btn1");
     Btn1.innerText="Order Food";

     document.querySelector("#container").append(H2,IMG,Btn1);

     document.querySelector("#pizza").addEventListener("click", function(){
         Btn1.addEventListener("click",function(){
               let myPromise=new Promise(function(resolve,reject){
                   resolve(setTimeout(myPizza,2000));
               })
         })
         function myPizza(){
             H2.innerText=  "Order id - "+ "pizza";
             IMG.src= "https://img.freepik.com/free-photo/top-view-pepperoni-pizza-with-mushroom-sausages-bell-pepper-olive-corn-black-wooden_141793-2158.jpg?w=2000"
         }
     })

    document.querySelector("#burger").addEventListener("click", function(){
        Btn1.addEventListener("click", function(){
        let myPromise = new Promise(function(resolve, reject){
                resolve(setTimeout(burgurFun, 2000));
                
                
                });
           console.log(myPromise);
        })
        function burgurFun(){
            H2.innerText =  "Order id - "+ "burger";
            IMG.src= "https://st2.depositphotos.com/1000339/5752/i/600/depositphotos_57527967-stock-photo-burger-and-french-fries.jpg";
        }
    
        });
        document.querySelector("#chilli").addEventListener("click", function(){
            Btn1.addEventListener("click", function(){
            let myPromise = new Promise(function(resolve, reject){
                    resolve(setTimeout(chiliFun, 2000));
                    
                    
                    });
            })
            function chiliFun(){
                H2.innerText =  "Order id - "+ "Chilli Patato";
                IMG.src= "https://st4.depositphotos.com/41078568/41393/i/950/depositphotos_413934934-stock-photo-vada-pav-wada-pav-indian.jpg";
            }
        
            });
            document.querySelector("#briyani").addEventListener("click", function(){
                Btn1.addEventListener("click", function(){
                let myPromise = new Promise(function(resolve, reject){
                        resolve(setTimeout(bryianiFun, 2000));
                        
                        
                        });
                })
                function bryianiFun(){
                    H2.innerText =  "Order id - "+ "briyani";
                    IMG.src= "https://st2.depositphotos.com/1005893/5343/i/450/depositphotos_53439141-stock-photo-biryani-rice-ready-to-eat.jpg";
                }
            
                });
                document.querySelector("#rice").addEventListener("click", function(){
                    Btn1.addEventListener("click", function(){
                    let myPromise = new Promise(function(resolve, reject){
                            resolve(setTimeout(riceFun, 2000));
                            
                            
                            });
                    })
                    function riceFun(){
                        H2.innerText =  "Order id - "+ "rice";
                        IMG.src= "https://st3.depositphotos.com/13349494/18121/i/450/depositphotos_181211690-stock-photo-bowls-tasty-rice-chopsticks-white.jpg";
                    }
                
                    });
                    document.querySelector("#roti").addEventListener("click", function(){
                        Btn1.addEventListener("click", function(){
                        let myPromise = new Promise(function(resolve, reject){
                                resolve(setTimeout(rotiFun, 2000));
                                
                                
                                });
                        })
                        function rotiFun(){
                            H2.innerText =  "Order id - "+ "roti";
                            IMG.src= "https://st.depositphotos.com/1005893/2891/i/450/depositphotos_28914361-stock-photo-chapatti-roti.jpg";
                        }
                    
                        });

                        document.querySelector("#chaumin").addEventListener("click", function(){
                            Btn1.addEventListener("click", function(){
                            let myPromise = new Promise(function(resolve, reject){
                                    resolve(setTimeout(chauminFun, 2000));
                                    
                                    
                                    });
                            })
                            function chauminFun(){
                                H2.innerText =  "Order id - "+ "chaumin";
                                IMG.src= "https://st2.depositphotos.com/48808868/45830/i/450/depositphotos_458300270-stock-photo-noodles-green-pea-spicy-masala.jpg";
                            }
                        
                            });                   

                            document.querySelector("#dosa").addEventListener("click", function(){
                                Btn1.addEventListener("click", function(){
                                let myPromise = new Promise(function(resolve, reject){
                                        resolve(setTimeout(dosaFun, 2000));
                                        });
                                })
                                function dosaFun(){
                                    H2.innerText =  "Order id - "+ "dosa";
                                    IMG.src= "https://st2.depositphotos.com/49005766/46392/i/450/depositphotos_463922268-stock-photo-south-indian-traditional-breakfast-dosa.jpg";
                                }
                                }); 
                                document.querySelector("#itly").addEventListener("click", function(){
                                    Btn1.addEventListener("click", function(){
                                    let myPromise = new Promise(function(resolve, reject){
                                            resolve(setTimeout(itlyFun, 2000));
                                            });
                                    })
                                    function itlyFun(){
                                        H2.innerText =  "Order id - "+ "itly";
                                        IMG.src= "https://st3.depositphotos.com/27472836/34821/i/450/depositphotos_348214128-stock-photo-south-indian-food-dish-idly.jpg";
                                    }
                                    });  
                                    document.querySelector("#chiken").addEventListener("click", function(){
                                        Btn1.addEventListener("click", function(){
                                        let myPromise = new Promise(function(resolve, reject){
                                                resolve(setTimeout(chikenFun, 2000));
                                                });
                                        })
                                        function chikenFun(){
                                            H2.innerText =  "Order id - "+ "chiken";
                                            IMG.src= "https://static7.depositphotos.com/1010050/709/i/450/depositphotos_7091034-stock-photo-roast-chicken.jpg";
                                        }
                                        }); 
                                        document.querySelector("#tandori").addEventListener("click", function(){
                                            Btn1.addEventListener("click", function(){
                                            let myPromise = new Promise(function(resolve, reject){
                                                    resolve(setTimeout(tandoriFun, 2000));
                                                    });
                                            })
                                            function tandoriFun(){
                                                H2.innerText =  "Order id - "+ "tandori";
                                                IMG.src= "https://st2.depositphotos.com/4513173/6656/i/450/depositphotos_66568599-stock-photo-delicious-tandoori-chicken-legs.jpg";
                                            }
                                            });    
                                            document.querySelector("#chickenRoll").addEventListener("click", function(){
                                                Btn1.addEventListener("click", function(){
                                                let myPromise = new Promise(function(resolve, reject){
                                                        resolve(setTimeout(chickenRollFun, 2000));
                                                        });
                                                })
                                                function chickenRollFun(){
                                                    H2.innerText =  "Order id - "+ "chickenRoll";
                                                    IMG.src= "https://st.depositphotos.com/2235295/2381/i/450/depositphotos_23811553-stock-photo-kebab-sandwich.jpg";
                                                }
                                                });    



