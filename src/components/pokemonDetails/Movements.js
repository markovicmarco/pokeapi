import React from 'react'
import { Grid, Segment, Divider, Header, Table } from "semantic-ui-react";
import {upperCase} from './Pokemon'
const Movements = ({data}) => {
  return (
    <Segment>
            <Divider horizontal>
              <Header as="h1" className="cap textshadow" content="Movements" />
            </Divider>
            <Grid stackable columns="4">
              <Table basic="very" compact textAlign='center' fluid>
                <Table.Body>
                  {data.map((res) => (
                    <Table.Row>
                      <Table.Cell ordered>
                        {upperCase(res.move.name)}
                      </Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table>
            </Grid>
          </Segment>
  )
}

export default Movements
