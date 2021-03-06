import React from "react";
import { Container, Segment, Grid, Header, List } from "semantic-ui-react";

const Footer = () => {
  return (
    <div style={{ background: "rgba(72, 138, 224, 0.473)" }}>
      <Container>
        <Header
          as="h2"
          content="Created by Developers"
          subheader="Collaborators"
        />
        <Grid columns="equal" stackable>
          <Grid.Column>
            <Segment>
              <List>
                <List.Item
                  icon="linkedin"
                  content={
                    <a href="https://www.linkedin.com/in/andr%C3%A9s-felipe-rojas-valero-44b215176/">
                      Andres Rojas
                    </a>
                  }
                />
                <List.Item icon="mail" content="Andres.02rojas@gmail.com" />
              </List>
            </Segment>
          </Grid.Column>

          <Grid.Column>
            <Segment>
              <List>
                <List.Item
                  icon="linkedin"
                  content={
                    <a href="https://www.linkedin.com/in/daniel-camacho-82066416b">
                      Daniel Camacho
                    </a>
                  }
                />
                <List.Item icon="mail" content="Danielk1260@gmail.com" />
              </List>
            </Segment>
          </Grid.Column>

          <Grid.Column>
            <Segment>
              <List>
                <List.Item
                  icon="linkedin"
                  content={
                    <a href="https://www.linkedin.com/in/andrés-david-mendoza-márquez-867a1b175">
                      Andres Mendoza
                    </a>
                  }
                />
                <List.Item icon="mail" content="Andres.david.mm@hotmail.com" />
              </List>
            </Segment>
          </Grid.Column>

          <Grid.Column width="16">
            <List>
              <List.Item disabled href="#">
                © 2021 Academlo Web Developers | Squad 5 Academlo
              </List.Item>
            </List>
          </Grid.Column>
        </Grid>

        <Segment basic />
      </Container>
    </div>
  );
};

export default Footer;
