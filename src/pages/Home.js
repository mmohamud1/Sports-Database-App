import React, { useState } from 'react';
import Modal from 'react-modal';
import Logo from '../img/sportsicon.png'

const Home = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false)

    return (
        <section>
            <div className="home-header">
                <h2 className="sub-heading">An interactive website in which you can search for any athlete and team from a wide selection of sports </h2>
                <button className="btn" onClick={() => setModalIsOpen(true)}>
                    Sign Up
                </button>
            </div>
            <div className="home">
                <h4 className="home-title">Welcome to my sports database :)</h4>
                <p className="home-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate a consequatur numquam porro dolor totam molestiae, in ipsam nostrum optio eveniet neque iusto praesentium. Quam eos perspiciatis earum nam sequi hic, laboriosam commodi totam alias, eveniet odio! Quaerat obcaecati animi debitis, eos cumque placeat incidunt aliquid, reiciendis neque harum praesentium officia voluptatem exercitationem labore at iure dolorum? Soluta illo quidem, numquam vero ad libero reprehenderit rerum ducimus placeat praesentium et quos tempora impedit laboriosam dolore provident! Eos sequi voluptatem et odit natus nihil quas. Voluptatum non fuga eos! Enim eos a ut voluptate quibusdam eveniet quis harum aliquam perspiciatis adipisci?</p>
                <p className="home-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate a consequatur numquam porro dolor totam molestiae, in ipsam nostrum optio eveniet neque iusto praesentium. Quam eos perspiciatis earum nam sequi hic, laboriosam commodi totam alias, eveniet odio! Quaerat obcaecati animi debitis, eos cumque placeat incidunt aliquid, reiciendis neque harum praesentium officia voluptatem exercitationem labore at iure dolorum? Soluta illo quidem, numquam vero ad libero reprehenderit rerum ducimus placeat praesentium et quos tempora impedit laboriosam dolore provident! Eos sequi voluptatem et odit natus nihil quas. Voluptatum non fuga eos! Enim eos a ut voluptate quibusdam eveniet quis harum aliquam perspiciatis adipisci?</p>
                <p className="home-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo aliquam voluptatum ipsum temporibus quis facere, id laboriosam. Pariatur ipsa minus iure reprehenderit eos ullam. Illum odio aliquid natus soluta doloremque cupiditate, quaerat alias nesciunt hic officia recusandae sequi eveniet error, numquam, id aut distinctio harum accusamus. In, velit. Pariatur alias, optio maiores accusamus debitis facilis culpa aperiam numquam a porro odit cum. Eius minima maiores provident quidem dolores perferendis, vitae laborum quisquam labore corporis. Quod eaque quos pariatur sint quidem facere magnam corrupti? Atque ab expedita quam ea mollitia excepturi velit neque? Molestias aperiam facilis eos assumenda. Consequuntur enim distinctio, adipisci in repellendus illum molestiae repellat! Modi voluptatum accusamus beatae fugiat nulla explicabo dicta, sint porro in cumque pariatur excepturi, et temporibus quisquam maiores delectus dolorum reprehenderit ea. Cumque, velit consectetur rerum labore reiciendis vero nemo consequatur aspernatur voluptatum perspiciatis necessitatibus exercitationem vel sapiente voluptatibus ad, doloribus accusamus. Ea iusto dignissimos corporis? Laudantium voluptate deleniti cum cumque distinctio atque eum dolores eaque, quidem ab dignissimos similique eveniet ipsa possimus eligendi quaerat non incidunt quae explicabo dolorem aspernatur adipisci aut reprehenderit fugiat. Ab quaerat natus illo aliquam sapiente, atque eum voluptatibus voluptates tempora dolorum accusantium officia sint praesentium fugit, quasi assumenda repellat debitis expedita est provident vitae delectus adipisci totam distinctio. Animi sunt earum esse vero, provident vitae sequi, voluptatem corrupti libero quisquam, tempore magni. Quaerat fugit error molestias possimus debitis perspiciatis atque assumenda labore, nostrum illum temporibus cumque distinctio laborum quas modi repellendus id cupiditate dolores quibusdam porro, natus aliquam?</p>
            </div>    
            <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} className="modal-1">
                <button className="close-btn" onClick={() => setModalIsOpen(false)} >
                    <i class="fa fa-times"></i>
                </button>
                <div className="modal-1-header">
                    <img src={Logo} alt="logo" style={{ width: '55px', height: '50px'}}/>
                    <h3>Sign Up</h3>
                </div>
                <div className="modal-1-content">
                    <p>Register with us to get up to date information and results</p>
                    <form className="modal-1-form">
                    <div>
                        <label for="name">Name</label>
                        <input type="text" id="name" placeholder="Enter Name" className="form-input" />
                    </div>
                    <div>
                        <label for="email">Email</label>
                        <input type="email" id="email" placeholder="Enter Email" className="form-input" />
                    </div>
                    <div>
                        <label for="password">Password</label>
                        <input type="password" id="Password" placeholder="Enter Password" className="form-input" />
                    </div>
                    <div>
                        <label for="password2">Confirm Password</label>
                        <input type="password" id="password2" placeholder="Confirm password" className="form-input" />
                    </div>
                    <input type="submit" value="Submit" className="submit-btn" />
                    </form>
                </div>
            </Modal>
            </section>
    )
}

export default Home
