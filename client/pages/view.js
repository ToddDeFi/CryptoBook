import Layout from "../components/Layout";
import { Button, Form, Message } from 'semantic-ui-react'
import { useRef, useState } from "react";
import getContactByAddress from "../utils/getContactByAddress";

const ViewContact = () => {
  const [telegram, setTelegram] = useState();
  const [discord, setDiscord] = useState();  
  const [desc, setDesc] = useState();
  const [errorMessage, setErrorMessage] = useState();

  const addressRef = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const address = addressRef.current.value;
    setErrorMessage("");
    setTelegram("");
    setDiscord("");
    setDesc("");
    if(!address){
        setErrorMessage("Wrong address!")
        return
      }
    try{
      const contact = await getContactByAddress(address);
      setTelegram(contact.telegram)
      setDiscord(contact.discord)
      setDesc(contact.desc)
    } catch(error){
      console.error(error)
      setErrorMessage(error.errorMessage)
    }
  };
  return (<Layout>
      <Form error={!!errorMessage} onSubmit={handleSubmit}>
          <Form.Field>
              <label>Contact address</label>
              <input ref={addressRef} placeholder='Address' />
          </Form.Field>
              <Button primary type='submit'>View</Button>
          <Message error header='Error' content={errorMessage} />
      </Form>
      {telegram && <h2>Telegram: {telegram}</h2>}
      {discord && <h2>Discord: {discord}</h2>}
      {desc && <h2>Desc: {desc}</h2>}
      </Layout>  );
}
 
export default ViewContact;