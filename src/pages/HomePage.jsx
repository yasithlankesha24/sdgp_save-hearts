import {Button, Col, Container, Row} from "react-bootstrap";
import "./HomePage.scss"
import {Activity, ChevronRight, DropletFill, PieChartFill} from "react-bootstrap-icons";
import {Footer} from "../components/Footer";
import React from "react";

export function HomePage() {

    return (
        <div>
            <div className="homepage page">
                <div className={"landing-section bg-moonlight"}>
                    <Container>
                        <Row>
                            <Col md={5}>
                                <div className={"landing-section-text-col"}>
                                    <div className="logo-text black-color">SAVE</div>
                                    <div className="logo-text red-color">HEARTS</div>
                                    <div className={"logo-description"}>Blood Donation Camp Management System</div>
                                    <div className="slogan mt-5">Give the Gift of Life</div>
                                    <div className="slogan red-color">DONATE BLOOD</div>
                                </div>

                            </Col>
                            <Col md={7}>
                                <div className="landing-section-image">
                                    <img src="/assets/images/homepage/hand-blood-drop.png" alt=""/>
                                </div>

                            </Col>
                        </Row>
                    </Container>
                </div>

                <div className="bg-pearlWhite past-statistics-section">
                    <Container>
                        <Row>
                            <Col md={7}>
                                <div className="past-statistics-section-image">
                                    <img src="/assets/images/homepage/past-statistics-doctor.png" alt=""/>
                                </div>
                            </Col>
                            <Col md={5}>
                                <div className="past-statistics-section-content">
                                    <div className="homepage-title-main">
                                        <div className="homepage-title">Last Month <span
                                        >Statistics</span></div>
                                    </div>
                                    <div className="past-statistics-item-row mt-5">
                                        <div className="past-statistics-item">
                                            <div className="past-statistics-amount red-color">1248</div>
                                            <div className="past-statistics-title">Total Blood Collection</div>
                                        </div>
                                        <div className="past-statistics-item">
                                            <div className="past-statistics-amount red-color">987</div>
                                            <div className="past-statistics-title">Total Blood Issues</div>
                                        </div>
                                    </div>
                                    <div className="past-statistics-item-row mt-4">
                                        <div className="past-statistics-item">
                                            <div className="past-statistics-amount red-color">38</div>
                                            <div className="past-statistics-title">Organized Blood Donation Camps Amount
                                            </div>
                                        </div>
                                        <div className="past-statistics-item">
                                            <div className="past-statistics-amount red-color">1625</div>
                                            <div className="past-statistics-title">Total Blood Donors</div>
                                        </div>
                                    </div>
                                    <div className={"past-statistics-description mt-5"}>Your precious donation of blood
                                        can
                                        save as many as 3 lives.
                                    </div>

                                    <div className={"link-btn-main mt-5"}>
                                        <Button className={"link-btn"}>Go to Statics <ChevronRight
                                            color={"#C91A21"}
                                            className={"mb-1 chevron-right"}/></Button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <div className="camp-organize-section bg-moonlight">
                    <Container>
                        <Row>
                            <Col md={6}>
                                <div className="camp-organize-section-content">
                                    <div className="homepage-title-main">
                                        <div className="homepage-title">Every drop counts! <span
                                        >Organize</span> a <span>blood donation camp</span> and
                                            save a life.
                                        </div>
                                    </div>
                                    <div className="camp-organize-section-description my-5">
                                        Every blood donation has the potential to save a life. As a leader in your
                                        community, you have the ability to make a real difference by organizing a blood
                                        donation camp. Take the lead and inspire others to join in and give the gift of
                                        life.
                                    </div>
                                    <div className={"link-btn-main mt-4"}>
                                        <Button className={"link-btn"}>Organize Blood Donation
                                            Camp <ChevronRight
                                                color={"#C91A21"}
                                                className={"mb-1 chevron-right"}/></Button>
                                    </div>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="camp-organize-section-image">
                                    <img src="/assets/images/homepage/camp-organize-doctor.png" alt=""/>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <div className="reserve-time-section bg-pearlWhite">
                    <Container>
                        <Row>
                            <Col md={6}>
                                <div className="reserve-time-section-image">
                                    <img src="/assets/images/homepage/reserve-time-doctor.png" alt=""/>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className="reserve-time-section-content">
                                    <div className="homepage-title-main">
                                        <div className="homepage-title">Online <span
                                        >Scheduling</span> for Blood Donation
                                        </div>
                                    </div>
                                    <div className="reserve-time-section-description my-5">Making an appointment for
                                        blood
                                        donation
                                        can save time and ensure a convenient donation experience. Online appointment
                                        scheduling, making it easy to check availability and reserve a time slot that
                                        works
                                        for you.
                                    </div>
                                    <div className={"link-btn-main mt-4"}>
                                        <Button className={"link-btn"}>Reserve a
                                            time <ChevronRight
                                                color={"#C91A21"}
                                                className={"mb-1 chevron-right"}/></Button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
            <Footer bgColor={"bg-moonlight"}/>
        </div>

    )
}