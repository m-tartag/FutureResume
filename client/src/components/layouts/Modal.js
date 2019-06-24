import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";

class RegisterModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  render() {
    return (
      <div>
        <div>
          <Button color="primary" onClick={this.toggle}>
            Register
          </Button>
          <Modal
            isOpen={this.state.modal}
            modalTransition={{ timeout: 700 }}
            backdropTransition={{ timeout: 1300 }}
            toggle={this.toggle}
          >
            <ModalHeader toggle={this.toggle}>Register User</ModalHeader>
            <ModalBody>
              <Form>
                <FormGroup>
                  <Label for="name">Name</Label>
                  <Input
                    type="text"
                    name="name"
                    id="name"
                    placholder="Name"
                    className="mb-3"
                  />

                  <Label for="email">Email</Label>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    placholder="Email"
                    className="mb-3"
                  />

                  <Label for="password">Password</Label>
                  <Input
                    type="password"
                    name="password"
                    id="password"
                    placholder="Password"
                    className="mb-3"
                  />

                  <Button color="primary" style={{ marginTop: "2rem" }} block>
                    Register
                  </Button>
                </FormGroup>
              </Form>
            </ModalBody>
          </Modal>
        </div>
      </div>
    );
  }
}

export default RegisterModal;
