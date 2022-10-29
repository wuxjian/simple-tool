import {Col, Row, TextArea, Typography} from "@douyinfe/semi-ui";
import {useEffect, useState} from "react";
import ReactJson from "react-json-view";


const JsonDecoder = () => {
    const [originalValue, setOriginalValue] = useState('')
    const [valid, setValid] = useState(false);
    const [changed, setChanged] = useState(false);
    let [jsonValue, setJsonValue] = useState({})
    useEffect(() => {
        if (isJson(originalValue)) {
            setValid(true)
            setJsonValue(JSON.parse(originalValue))
        } else {
            setValid(false)
        }
    }, [originalValue])

    function isJson(str: string) {
        if (isNaN(Number(str))) {
            try {
                JSON.parse(str);
                return true;
            } catch (e) {
                return false;
            }

        }
        return false;
    }

    return (
        <Row gutter={10}>
            <Col sm={24} md={10}>
                <TextArea
                    value={originalValue}
                    rows={20}
                    onChange={(v) => {
                        setChanged(true)
                        setOriginalValue(v)
                    }}/>
            </Col>
            <Col sm={24} md={10}>
                {
                    changed && !valid &&
                    <Typography.Text type="danger" size='small'>
                        不是一个合法的json
                    </Typography.Text>
                }
                <ReactJson
                    style={{marginTop: "10px"}}
                    quotesOnKeys={false}
                    src={jsonValue}/>
            </Col>
        </Row>
    )
}

export default JsonDecoder