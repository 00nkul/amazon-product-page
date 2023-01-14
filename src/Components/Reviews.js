import React from 'react'

export default function Reviews() {
    return (
        <div className='row'>
            <div className="col-4">
                <div className="p-2">
                    <h3>Customer reviews</h3>
                    <div className="d-flex">
                        <div className="stars">
                            <span class="star">&#9733;</span>
                            <span class="star">&#9733;</span>
                            <span class="star">&#9733;</span>
                            <span class="star">&#9733;</span>
                            <span class="star">&#9733;</span>
                            <span class=""> 4 out of 5</span>
                        </div>
                    </div>
                    <p>20,000 global ratings</p>
                    <div className="w-80 border-bottom mb-3">
                        <div className="d-flex align-items-center justify-content-center">
                            <span>5 </span>
                            <div class="progress w-100">
                                <div class="progress-bar bg-warning" role="progressbar" style={{ width: "55%" }} aria-valuenow="100" aria-valuemin="100" aria-valuemax="100"></div>
                            </div>
                            <span>50%</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-center">
                            <span>4 </span>
                            <div class="progress w-100">
                                <div class="progress-bar bg-warning" role="progressbar" style={{ width: "80%" }} aria-valuenow="100" aria-valuemin="100" aria-valuemax="100"></div>
                            </div>
                            <span>80%</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-center">
                            <span>3 </span>
                            <div class="progress w-100">
                                <div class="progress-bar bg-warning" role="progressbar" style={{ width: "35%" }} aria-valuenow="100" aria-valuemin="100" aria-valuemax="100"></div>
                            </div>
                            <span>35%</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-center">
                            <span>2 </span>
                            <div class="progress w-100">
                                <div class="progress-bar bg-warning" role="progressbar" style={{ width: "25%" }} aria-valuenow="100" aria-valuemin="100" aria-valuemax="100"></div>
                            </div>
                            <span>25%</span>
                        </div>
                        <div className="d-flex align-items-center justify-content-center">
                            <span>1 </span>
                            <div class="progress w-100">
                                <div class="progress-bar bg-warning" role="progressbar" style={{ width: "10%" }} aria-valuenow="100" aria-valuemin="100" aria-valuemax="100"></div>
                            </div>
                            <span>10%</span>
                        </div>
                        <p className='text-primary'>How ratings calculated ?</p>
                    </div>

                    <div className="border-bottom">
                        <h4>By feature</h4>
                        <div className="d-flex align-items-center justify-content-between">
                            <div className="" style={{ fontSize: '14px' }}>Comfort</div>
                            <div className="d-flex">
                                <div className="stars">
                                    <span class="star">&#9733;</span>
                                    <span class="star">&#9733;</span>
                                    <span class="star">&#9733;</span>
                                    <span class="star">&#9733;</span>
                                    <span class="star">&#9733;</span>
                                    <span class="" style={{ fontSize: '12px' }} >4</span>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                            <div className="" style={{ fontSize: '14px' }}>Value for money</div>
                            <div className="d-flex">
                                <div className="stars">
                                    <span class="star">&#9733;</span>
                                    <span class="star">&#9733;</span>
                                    <span class="star">&#9733;</span>
                                    <span class="star">&#9733;</span>
                                    <span class="star">&#9733;</span>
                                    <span class="" style={{ fontSize: '12px' }} >4</span>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between">
                            <div className="" style={{ fontSize: '14px' }}>Quality of material</div>
                            <div className="d-flex">
                                <div className="stars">
                                    <span class="star">&#9733;</span>
                                    <span class="star">&#9733;</span>
                                    <span class="star">&#9733;</span>
                                    <span class="star">&#9733;</span>
                                    <span class="star">&#9733;</span>
                                    <span class="" style={{ fontSize: '12px' }} >4</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-8">
                <div className="p-2">
                    <h4>Read reviews that mention</h4>
                    <div className="d-flex">
                        <span className="btn btn-secondary ms-2">value for money</span>
                        <span className="btn btn-secondary ms-2">waste of money</span>
                        <span className="btn btn-secondary ms-2">poor quality</span>
                        <span className="btn btn-secondary ms-2">bad quality</span>
                        <span className="btn btn-secondary ms-2">value for money</span>
                    </div>
                    <div className="d-flex mt-2">
                        <span className="btn btn-secondary ms-2">value for money</span>
                        <span className="btn btn-secondary ms-2">waste of money</span>
                        <span className="btn btn-secondary ms-2">value for money</span>
                    </div>
                    <div className="d-flex mt-2">
                        <span className="btn btn-secondary ms-2">value for money</span>
                        <span className="btn btn-secondary ms-2">poor quality</span>
                        <span className="btn btn-secondary ms-2">bad quality</span>
                        <span className="btn btn-secondary ms-2">value for money</span>
                    </div>

                    <h4>Top reviews from India</h4>

                    <div className="review border-bottom" style={{fontSize:'12px'}}>
                        <div className="d-flex align-items-center">
                            <img src={'https://images-eu.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png'} alt="" />
                            <p className='mb-0 fw-bold'>username</p>
                        </div>
                        <div className="d-flex align-items-center">
                            <div className="d-flex">
                                <div className="stars">
                                    <span class="star">&#9733;</span>
                                    <span class="star">&#9733;</span>
                                    <span class="star">&#9733;</span>
                                    <span class="star">&#9733;</span>
                                    <span class="star">&#9733;</span>
                                </div>
                            </div>
                            <p className='mb-0 fw-bold'>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="">
                            Size:XL   Colour:Black
                        </div>
                        <div className="">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, dolores esse! Tempore, doloribus officiis fuga eaque iste nemo iusto consequatur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, dolores esse! Tempore, doloribus officiis fuga eaque iste nemo iusto consequatur.</p>
                        </div>
                        <div className="d-flex mb-3">
                            <button type="button" style={{fontSize:'12px'}} class="btn btn-outline-dark">Helpful</button>
                            <button type="button" style={{fontSize:'12px'}} class="btn ms-2 btn-outline-dark">Report</button>
                        </div>
                    </div>
                    <div className="review border-bottom" style={{fontSize:'12px'}}>
                        <div className="d-flex align-items-center">
                            <img src={'https://images-eu.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png'} alt="" />
                            <p className='mb-0 fw-bold'>username</p>
                        </div>
                        <div className="d-flex align-items-center">
                            <div className="d-flex">
                                <div className="stars">
                                    <span class="star">&#9733;</span>
                                    <span class="star">&#9733;</span>
                                    <span class="star">&#9733;</span>
                                    <span class="star">&#9733;</span>
                                    <span class="star">&#9733;</span>
                                </div>
                            </div>
                            <p className='mb-0 fw-bold'>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="">
                            Size:XL   Colour:Black
                        </div>
                        <div className="">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, dolores esse! Tempore, doloribus officiis fuga eaque iste nemo iusto consequatur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, dolores esse! Tempore, doloribus officiis fuga eaque iste nemo iusto consequatur.</p>
                        </div>
                        <div className="d-flex mb-3">
                            <button type="button" style={{fontSize:'12px'}} class="btn btn-outline-dark">Helpful</button>
                            <button type="button" style={{fontSize:'12px'}} class="btn ms-2 btn-outline-dark">Report</button>
                        </div>
                    </div>
                    <div className="review border-bottom" style={{fontSize:'12px'}}>
                        <div className="d-flex align-items-center">
                            <img src={'https://images-eu.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png'} alt="" />
                            <p className='mb-0 fw-bold'>username</p>
                        </div>
                        <div className="d-flex align-items-center">
                            <div className="d-flex">
                                <div className="stars">
                                    <span class="star">&#9733;</span>
                                    <span class="star">&#9733;</span>
                                    <span class="star">&#9733;</span>
                                    <span class="star">&#9733;</span>
                                    <span class="star">&#9733;</span>
                                </div>
                            </div>
                            <p className='mb-0 fw-bold'>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="">
                            Size:XL   Colour:Black
                        </div>
                        <div className="">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, dolores esse! Tempore, doloribus officiis fuga eaque iste nemo iusto consequatur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, dolores esse! Tempore, doloribus officiis fuga eaque iste nemo iusto consequatur.</p>
                        </div>
                        <div className="d-flex mb-3">
                            <button type="button" style={{fontSize:'12px'}} class="btn btn-outline-dark">Helpful</button>
                            <button type="button" style={{fontSize:'12px'}} class="btn ms-2 btn-outline-dark">Report</button>
                        </div>
                    </div>
                    <div className="review border-bottom" style={{fontSize:'12px'}}>
                        <div className="d-flex align-items-center">
                            <img src={'https://images-eu.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png'} alt="" />
                            <p className='mb-0 fw-bold'>username</p>
                        </div>
                        <div className="d-flex align-items-center">
                            <div className="d-flex">
                                <div className="stars">
                                    <span class="star">&#9733;</span>
                                    <span class="star">&#9733;</span>
                                    <span class="star">&#9733;</span>
                                    <span class="star">&#9733;</span>
                                    <span class="star">&#9733;</span>
                                </div>
                            </div>
                            <p className='mb-0 fw-bold'>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="">
                            Size:XL   Colour:Black
                        </div>
                        <div className="">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, dolores esse! Tempore, doloribus officiis fuga eaque iste nemo iusto consequatur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, dolores esse! Tempore, doloribus officiis fuga eaque iste nemo iusto consequatur.</p>
                        </div>
                        <div className="d-flex mb-3">
                            <button type="button" style={{fontSize:'12px'}} class="btn btn-outline-dark">Helpful</button>
                            <button type="button" style={{fontSize:'12px'}} class="btn ms-2 btn-outline-dark">Report</button>
                        </div>
                    </div>
                    <div className="review border-bottom" style={{fontSize:'12px'}}>
                        <div className="d-flex align-items-center">
                            <img src={'https://images-eu.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png'} alt="" />
                            <p className='mb-0 fw-bold'>username</p>
                        </div>
                        <div className="d-flex align-items-center">
                            <div className="d-flex">
                                <div className="stars">
                                    <span class="star">&#9733;</span>
                                    <span class="star">&#9733;</span>
                                    <span class="star">&#9733;</span>
                                    <span class="star">&#9733;</span>
                                    <span class="star">&#9733;</span>
                                </div>
                            </div>
                            <p className='mb-0 fw-bold'>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="">
                            Size:XL   Colour:Black
                        </div>
                        <div className="">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, dolores esse! Tempore, doloribus officiis fuga eaque iste nemo iusto consequatur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, dolores esse! Tempore, doloribus officiis fuga eaque iste nemo iusto consequatur.</p>
                        </div>
                        <div className="d-flex mb-3">
                            <button type="button" style={{fontSize:'12px'}} class="btn btn-outline-dark">Helpful</button>
                            <button type="button" style={{fontSize:'12px'}} class="btn ms-2 btn-outline-dark">Report</button>
                        </div>
                    </div>
                    <div className="review border-bottom" style={{fontSize:'12px'}}>
                        <div className="d-flex align-items-center">
                            <img src={'https://images-eu.ssl-images-amazon.com/images/S/amazon-avatars-global/default._CR0,0,1024,1024_SX48_.png'} alt="" />
                            <p className='mb-0 fw-bold'>username</p>
                        </div>
                        <div className="d-flex align-items-center">
                            <div className="d-flex">
                                <div className="stars">
                                    <span class="star">&#9733;</span>
                                    <span class="star">&#9733;</span>
                                    <span class="star">&#9733;</span>
                                    <span class="star">&#9733;</span>
                                    <span class="star">&#9733;</span>
                                </div>
                            </div>
                            <p className='mb-0 fw-bold'>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="">
                            Size:XL   Colour:Black
                        </div>
                        <div className="">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, dolores esse! Tempore, doloribus officiis fuga eaque iste nemo iusto consequatur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, dolores esse! Tempore, doloribus officiis fuga eaque iste nemo iusto consequatur.</p>
                        </div>
                        <div className="d-flex mb-3">
                            <button type="button" style={{fontSize:'12px'}} class="btn btn-outline-dark">Helpful</button>
                            <button type="button" style={{fontSize:'12px'}} class="btn ms-2 btn-outline-dark">Report</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}