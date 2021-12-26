import React from 'react'
import './features.css'
import features from './../resources/features.png'
import features2 from './../resources/features2.png'
import features3 from './../resources/features3.png'
import features4 from './../resources/features4.png'
import features5 from './../resources/features5.png'


export default function Features() {
    return (
        <div id='page'>
                <div class='featurePage'  id="this">
                    <div class='textContent'>
                        <p class='featureLine'>State of the Art Vision Board</p>
                        <p class='featureInfo'>A vision board can also help you to increase understanding of <strong>what you want</strong> and <span>how you want to get there.</span><br/><br/>Flowspace offers the very best vision board on the market, with the ability to add not only pictures but videos as well, making it easy to integrate it into your daily routine</p>
                    </div>
                    <img src={features} alt='features' id='img'/>
                </div>



                <div class='featurePage' data-aos='fade-left'>
                    <div class='textContent'>
                        <p class='featureLine'>Collaborative Note-keeping and Project Management</p>
                        <p class='featureInfo'>Effective note taking helps you to remember information and aids your understanding of that information. Once created, your notes then act as a record of your thinking and they also provide the source material for your next creative or business project.<br/><br/>Flowspace has a built in note suite to help you keep track of notes and search through then with hashtags and comment on files left by teammates, it is both personal and collaborative</p>
                    </div>
                    <img src={features2} alt='features2' id='img2'/>
                </div>



                <div class='featurePage' data-aos='fade-right'>
                    <div class='textContent'>
                        <p class='featureLine'>Love Music While You Work?</p>
                        <p class='featureInfo'>Flowspace has a built in music player that has an endless stream of chill-beats, smooth jazz, study music and lofi tracks to keep you in the your flow state while you work on your most challenging projects.</p>
                    </div>
                    <img src={features3} alt='features3' id='img3'/>
                </div>



                <div class='featurePage' data-aos='fade-down'>
                    <div class='textContent'>
                        <p class='featureLine'>Collaborative Shareable Kahnbahn Board</p>
                        <p class='featureInfo'>A Kanban board is a tool for workflow visualization <br/><br/>Visualizing your workflow and tasks on a  Kanban board helps you better understand your processes and gain an overview of your workload. With this new level of transparency, you will quickly identify problematic work stages, and by improving those, your team will soon work more efficiently.</p>
                    </div>
                    <img src={features4} alt='features4' id='img4'/>
                </div>


                <div class='featurePage' data-aos='fade-up'>
                    <div class='textContent'>
                        <p class='featureLine'> Powerful <br/>Yet Simple</p>
                        <p class='featureInfo'>Complete is the best word, to describe the productivity suite offered by flowspace with all the features you love, such as multiple calendars, recurring tasks, quick add, habit tracking, pomodoro timers, hashtags, filters, comments, live collaborative project planning, task delegation, along with a visual canvas to easir visualise the flow of projects, timed tasks,<br/><br/>Flowspace has been crammed full of powerful features to help users find their unique flow and thrive.</p>
                    </div>
                    <img src={features5} alt='features5' id='img5'/>
                </div>
               
        </div>
    )
}
