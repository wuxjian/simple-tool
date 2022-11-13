import {Button, Col, Row, Space, TextArea} from "@douyinfe/semi-ui";
import {useState} from "react";
import Base64 from 'crypto-js/enc-base64'
import CryptoJS from 'crypto-js'

const UrlEncode = () => {
    const [leftValue, setLeftValue] = useState('')

    const handleEnButtonClick = () => {
        if (!leftValue) {
            return
        }
        const encodeValue = encodeURIComponent(leftValue)
        setRightValue(encodeValue)
    }

    const handleDeButtonClick = () => {
        if (!rightValue) {
            return
        }
        const decodeValue = decodeURIComponent(rightValue)
        setLeftValue(decodeValue)
    }

    const [rightValue, setRightValue] = useState('')


    return (
        <Row gutter={10}>
            <Col sm={24} md={11}>
                <TextArea
                    rows={20}
                    value={leftValue}
                    onChange={v => {
                        setLeftValue(v)
                    }}
                />
            </Col>
            <Col sm={24} md={2} style={{height: "100px"}}>
                <Space vertical style={{width: "100%", height: "100%", justifyContent: "center"}}>
                    <Button
                        onClick={handleEnButtonClick}
                        theme='light' type='tertiary' style={{marginRight: 8}}> 编 码 </Button>
                    <Button
                        onClick={handleDeButtonClick}
                        theme='light' type='tertiary' style={{marginRight: 8}}> 解 码 </Button>
                </Space>
            </Col>
            <Col sm={24} md={11}>
                <TextArea
                    rows={20}
                    value={rightValue}
                    onChange={v => {
                        setRightValue(v)
                    }}
                />
            </Col>
        </Row>
    )
}

export default UrlEncode