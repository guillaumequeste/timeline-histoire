import React, { Component } from 'react'
import Header from './Header'
import Footer from './Footer'

class Contact extends Component {
  
    render () {
        return (
            <div>
                <Header />
                <Footer />
                <div className="bodyContact">
                    <div className="contact">
                        <h3>guillaume.queste@laposte.net</h3>
                        <a href="http://www.guillaumequeste.fr" target="_blank">http://www.guillaumequeste.fr</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact