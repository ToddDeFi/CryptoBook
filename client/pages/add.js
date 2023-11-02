import { useState } from "react";
import { Button, Form, Input, Message } from "semantic-ui-react";
import Layout from "../components/Layout";
import contactFactory from "../contactFactory";
import provider from "../provider";

const AddContact = () => {

    const [telegram, setTelegram] = useState("");
    const [discord, setDiscord] = useState("");
    const [errorMessage, setErrorMessage] = useState();
    const [successMessage, setSuccessMessage] = useState();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setErrorMessage("")
        setSuccessMessage("")
        if(!telegram){
            setErrorMessage("Telegram is neccessary")
        }
        const signer = provider.getSigner();
        const contactFactoryWithSigner = contactFactory.connect(signer)
        try{
            let response;
            if(discord){
                response = await contactFactoryWithSigner["createContact(string,string)"](telegram, discord)    
            }else{
                response = await contactFactoryWithSigner["createContact(string)"](telegram) 
            }
            console.log("response ",response)
            setSuccessMessage("Tx: " + response.hash)
        }catch(error){
            console.error(error)
            setErrorMessage(error.message)
        }
    }

    return (<Layout>
        <Form error={!!errorMessage} success={!!successMessage} onSubmit={handleSubmit}>
            <Form.Group widths='equal'>
                <Form.Field
                id='form-input-control-first-name'
                value={telegram}
                control={Input}
                label='Telegram'
                placeholder='Your telegram'
                onChange={(event) => setTelegram(event.target.value)}
            />
            <Form.Field
                id='form-input-control-last-name'
                value={discord}
                control={Input}
                label='Discord'
                placeholder='Your discord'
                onChange={(event) => setDiscord(event.target.value)}
            />
            </Form.Group>
            <Button primary>Create</Button>
            <Message style={{ wordBreak: 'break-word' }} error header='Error' content={errorMessage} />
            <Message success header='Added' content={successMessage} />
        </Form>
    </Layout>);
}
 
export default AddContact;
