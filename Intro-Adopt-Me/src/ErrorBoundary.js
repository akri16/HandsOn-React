import { Component } from "react";
import { Link, Redirect } from "react-router-dom";


class ErrorBoundary extends Component {

    state = { hasError: false, redirect: false };

    static getDerivedStateFromError() {
        return { hasError: true }
    }

    componentDidCatch(error, info) {
        // Log this to Sentry, Azure Monitor ....
        console.error("Error Boundary caught an error");
        setTimeout(() => this.setState({ redirect: true }), 5000);
    } 


    render () {

        if (this.state.redirect) {
            return <Redirect to="/" />
        } else if (this.state.hasError) {
            return (
                <h2>
                    This listing has an error. Click <Link to="/">here</Link> to go back to safety
                </h2>
            )
        }

        return this.props.children;
    }

}

export default ErrorBoundary;