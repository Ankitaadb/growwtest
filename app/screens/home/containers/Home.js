import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import { HomeComponent } from '../components'
import { connect } from 'react-redux'
import { fetchImages, saveSelectedImage, resetImages, authorize } from '../actions'
import { getImages, getAuthCode } from '../../../selectors';

class Home extends Component {
    static navigationOptions = {
        title: 'Home',
    };
    constructor(props) {
        super(props)

        this.state = {
            scrollObject: { height: 0 },
            pageNumber: 1,
            keyword: 'kittens'
        }
    }


    componentDidMount() {
        this.props.authorize()
    }

    componentDidUpdate(prevProps) {
        if (prevProps.authCode !== this.props.authCode) {
            this.getImagesByKeyword()
        }
    }

    getImagesByKeyword = () => {
        const { fetchImages, resetImages, authCode } = this.props
        resetImages()
        fetchImages(this.state.keyword, this.state.pageNumber, authCode)
    }

    handleChange = (key, value) => {
        if (value !== this.state[key] && value.trim().length > 0) {
            this.setState({ [key]: value })
        }
    }

    infiniteScroll = (scrollObject) => {
        if (scrollObject.contentOffset.y > this.state.scrollObject.height &&
            scrollObject.contentOffset.y > scrollObject.contentSize.height - 1400) {
            this.setState({
                scrollObject: {
                    height: scrollObject.contentOffset.y,
                },
                page: this.state.pageNumber + 1
            })
            this.props.fetchImages(this.state.keyword, this.state.pageNumber + 1, this.props.authCode)
            return
        }
        this.setState({
            scrollObject: {
                height: scrollObject.contentOffset.y
            }
        })

    }

    render() {
        const { images } = this.props
        return (
            <HomeComponent images={images}
                setSelectedImage={this.setSelectedImage}
                handleChange={this.handleChange}
                keyword={this.state.keyword}
                getImagesByKeyword={this.getImagesByKeyword}
                infiniteScroll={this.infiniteScroll}
            />

        )
    }
}

const mapStateToProps = state => ({
    images: getImages(state),
    authCode: getAuthCode(state)
})

const mapDispatchToProps = {
    fetchImages,
    saveSelectedImage,
    resetImages,
    authorize
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)