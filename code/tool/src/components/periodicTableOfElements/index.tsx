import {Breadcrumb, Col, Descriptions, Divider, Row, Typography} from "@douyinfe/semi-ui";
import {IconHome, IconPriceTag} from "@douyinfe/semi-icons";
import React from "react";
import {data,style,AXstyle,LXstyle} from './data';
require('./index.css');
const { Title } = Typography;


export const AlPeriodicTableOfElements = () => {
  return(
      <div style={{margin: '20px 10px',marginLeft:'-25%',marginRight:'-25%'}}>
          <Breadcrumb compact={false}>
              <Breadcrumb.Item icon={<IconHome size="small" />}></Breadcrumb.Item>
              <Breadcrumb.Item icon={<IconPriceTag size="small" />}>学术类</Breadcrumb.Item>
              <Breadcrumb.Item>化学元素周期表</Breadcrumb.Item>
          </Breadcrumb>

          <Title heading={2} style={{ margin: '8px 0' }} >化学元素周期表</Title>

          <Row >
              <Col span={8}>
                  <Row>
                      <Col className='semi-col-my' span={4}><Descriptions align="center" data={data.H} style={style} /></Col>
                  </Row>
              </Col>
              <Col span={8}>
                  <Row>
                  </Row>
              </Col>
              <Col span={8}>
                  <Row>
                      <Col className='semi-col-my' span={4} offset={20}><Descriptions align="center" data={data.He} style={style} /></Col>
                  </Row>
              </Col>
          </Row>
          <Row>
              <Col span={8}>
                  <Row >
                      <Col className='semi-col-my' span={4}><Descriptions align="center" data={data.Li} style={style} /></Col>
                      <Col className='semi-col-my' span={4}><Descriptions align="center" data={data.Be} style={style} /></Col>
                  </Row>
              </Col>
              <Col span={8}><Row></Row></Col>
              <Col span={8}>
                  <Row>
                      <Col className='semi-col-my' span={4}><Descriptions align="center" data={data.B} style={style} /></Col>
                      <Col className='semi-col-my' span={4}><Descriptions align="center" data={data.C} style={style} /></Col>
                      <Col className='semi-col-my' span={4}><Descriptions align="center" data={data.N} style={style} /></Col>
                      <Col className='semi-col-my' span={4}><Descriptions align="center" data={data.O} style={style} /></Col>
                      <Col className='semi-col-my' span={4}><Descriptions align="center" data={data.F} style={style} /></Col>
                      <Col className='semi-col-my' span={4}><Descriptions align="center" data={data.Ne} style={style} /></Col>
                  </Row>
              </Col>


          </Row>
          <Row >
              <Col span={8}>
                  <Row>
                      <Col className='semi-col-my' span={4}><Descriptions align="center" data={data.Na} style={style} /></Col>
                      <Col className='semi-col-my' span={4}><Descriptions align="center" data={data.Mg} style={style} /></Col>
                  </Row>
              </Col>
              <Col span={8}><Row></Row></Col>
              <Col span={8}>
                  <Row>
                      <Col className='semi-col-my' span={4}><Descriptions align="center" data={data.Al} style={style} /></Col>
                      <Col className='semi-col-my' span={4}><Descriptions align="center" data={data.Si} style={style} /></Col>
                      <Col className='semi-col-my' span={4}><Descriptions align="center" data={data.P} style={style} /></Col>
                      <Col className='semi-col-my' span={4}><Descriptions align="center" data={data.S} style={style} /></Col>
                      <Col className='semi-col-my' span={4}><Descriptions align="center" data={data.Cl} style={style} /></Col>
                      <Col className='semi-col-my' span={4}><Descriptions align="center" data={data.Ar} style={style} /></Col>
                  </Row>
              </Col>
          </Row>
          <Row >
              <Col span={8}>
                  <Row>
                      <Col className='semi-col-my' span={4}><Descriptions align="center" data={data.K} style={style} /></Col>
                      <Col className='semi-col-my' span={4}><Descriptions align="center" data={data.Ca} style={style} /></Col>
                      <Col className='semi-col-my' span={4}><Descriptions align="center" data={data.Sc} style={style} /></Col>
                      <Col className='semi-col-my' span={4}><Descriptions align="center" data={data.Ti} style={style} /></Col>
                      <Col className='semi-col-my' span={4}><Descriptions align="center" data={data.V} style={style} /></Col>
                      <Col className='semi-col-my' span={4}><Descriptions align="center" data={data.Cr} style={style} /></Col>
                  </Row>
              </Col>
              <Col span={8}>
                  <Row>
                      <Col className='semi-col-my' span={4}><Descriptions align="center" data={data.Mn} style={style} /></Col>
                      <Col className='semi-col-my' span={4}><Descriptions align="center" data={data.Fe} style={style} /></Col>
                      <Col className='semi-col-my' span={4}><Descriptions align="center" data={data.Co} style={style} /></Col>
                      <Col className='semi-col-my' span={4}><Descriptions align="center" data={data.Ni} style={style} /></Col>
                      <Col className='semi-col-my' span={4}><Descriptions align="center" data={data.Cu} style={style} /></Col>
                      <Col className='semi-col-my' span={4}><Descriptions align="center" data={data.Zn} style={style} /></Col>
                  </Row>
              </Col>
              <Col span={8}>
                  <Row>
                      <Col className='semi-col-my' span={4}><Descriptions align="center" data={data.Ga} style={style} /></Col>
                      <Col className='semi-col-my' span={4}><Descriptions align="center" data={data.Ge} style={style} /></Col>
                      <Col className='semi-col-my' span={4}><Descriptions align="center" data={data.As} style={style} /></Col>
                      <Col className='semi-col-my' span={4}><Descriptions align="center" data={data.Se} style={style} /></Col>
                      <Col className='semi-col-my' span={4}><Descriptions align="center" data={data.Br} style={style} /></Col>
                      <Col className='semi-col-my' span={4}><Descriptions align="center" data={data.Kr} style={style} /></Col>
                  </Row>
              </Col>
          </Row>
          <Row >
              <Col span={8}>
                  <Row>
                      <Col className='semi-col-my' span={4}><Descriptions align="center" data={data.Rb} style={style} /></Col>
                      <Col className='semi-col-my' span={4}><Descriptions align="center" data={data.Sr} style={style} /></Col>
                      <Col className='semi-col-my' span={4}><Descriptions align="center" data={data.Y} style={style} /></Col>
                      <Col className='semi-col-my' span={4}><Descriptions align="center" data={data.Zr} style={style} /></Col>
                      <Col className='semi-col-my' span={4}><Descriptions align="center" data={data.Nb} style={style} /></Col>
                      <Col className='semi-col-my' span={4}><Descriptions align="center" data={data.Mo} style={style} /></Col>
                  </Row>
              </Col>
              <Col span={8}>
                  <Row>
                      <Col className='semi-col-my' span={4}><Descriptions align="center" data={data.Tc} style={style} /></Col>
                      <Col className='semi-col-my' span={4}><Descriptions align="center" data={data.Ru} style={style} /></Col>
                      <Col className='semi-col-my' span={4}><Descriptions align="center" data={data.Rh} style={style} /></Col>
                      <Col className='semi-col-my' span={4}><Descriptions align="center" data={data.Pd} style={style} /></Col>
                      <Col className='semi-col-my' span={4}><Descriptions align="center" data={data.Ag} style={style} /></Col>
                      <Col className='semi-col-my' span={4}><Descriptions align="center" data={data.Cd} style={style} /></Col>
                  </Row>
              </Col>
              <Col span={8}>
                  <Row>
                      <Col className='semi-col-my' span={4}><Descriptions align="center" data={data.In} style={style} /></Col>
                      <Col className='semi-col-my' span={4}><Descriptions align="center" data={data.Sn} style={style} /></Col>
                      <Col className='semi-col-my' span={4}><Descriptions align="center" data={data.Sb} style={style} /></Col>
                      <Col className='semi-col-my' span={4}><Descriptions align="center" data={data.Te} style={style} /></Col>
                      <Col className='semi-col-my' span={4}><Descriptions align="center" data={data.I} style={style} /></Col>
                      <Col className='semi-col-my' span={4}><Descriptions align="center" data={data.Xe} style={style} /></Col>
                  </Row>
              </Col>
          </Row>
          <Row >
              <Col span={8}>
                  <Row>
                      <Col className='semi-col-my' span={4}><Descriptions align="center" data={data.Cs} style={style} /></Col>
                      <Col className='semi-col-my' span={4}><Descriptions align="center" data={data.Ba} style={style} /></Col>
                      <Col className='semi-col-my' span={4}><Descriptions align="center" data={data.LX} style={LXstyle} /></Col>
                      <Col className='semi-col-my' span={4}><Descriptions align="center" data={data.Hf} style={style} /></Col>
                      <Col className='semi-col-my' span={4}><Descriptions align="center" data={data.Ta} style={style} /></Col>
                      <Col className='semi-col-my' span={4}><Descriptions align="center" data={data.W} style={style} /></Col>
                  </Row>
              </Col>
              <Col span={8}>
                  <Row>
                      <Col className='semi-col-my' span={4}><Descriptions align="center" data={data.Re} style={style} /></Col>
                      <Col className='semi-col-my' span={4}><Descriptions align="center" data={data.Os} style={style} /></Col>
                      <Col className='semi-col-my' span={4}><Descriptions align="center" data={data.Ir} style={style} /></Col>
                      <Col className='semi-col-my' span={4}><Descriptions align="center" data={data.Pt} style={style} /></Col>
                      <Col className='semi-col-my' span={4}><Descriptions align="center" data={data.Au} style={style} /></Col>
                      <Col className='semi-col-my' span={4}><Descriptions align="center" data={data.Hg} style={style} /></Col>
                  </Row>
              </Col>
              <Col span={8}>
                  <Row>
                      <Col className='semi-col-my' span={4}><Descriptions align="center" data={data.Tl} style={style} /></Col>
                      <Col className='semi-col-my' span={4}><Descriptions align="center" data={data.Pb} style={style} /></Col>
                      <Col className='semi-col-my' span={4}><Descriptions align="center" data={data.Bi} style={style} /></Col>
                      <Col className='semi-col-my' span={4}><Descriptions align="center" data={data.Po} style={style} /></Col>
                      <Col className='semi-col-my' span={4}><Descriptions align="center" data={data.At} style={style} /></Col>
                      <Col className='semi-col-my' span={4}><Descriptions align="center" data={data.Rn} style={style} /></Col>
                  </Row>
              </Col>
          </Row>
          <Row >
              <Col span={8}>
                  <Row>
                      <Col className='semi-col-my' span={4}><Descriptions align="center" data={data.Fr} style={style} /></Col>
                      <Col className='semi-col-my' span={4}><Descriptions align="center" data={data.Ra} style={style} /></Col>
                      <Col className='semi-col-my' span={4}><Descriptions align="center" data={data.AX} style={AXstyle} /></Col>
                      <Col className='semi-col-my' span={4}><Descriptions align="center" data={data.Rf} style={style} /></Col>
                      <Col className='semi-col-my' span={4}><Descriptions align="center" data={data.Db} style={style} /></Col>
                      <Col className='semi-col-my' span={4}><Descriptions align="center" data={data.Sg} style={style} /></Col>
                  </Row>
              </Col>
              <Col span={8}>
                  <Row>
                      <Col className='semi-col-my' span={4}><Descriptions align="center" data={data.Bh} style={style} /></Col>
                      <Col className='semi-col-my' span={4}><Descriptions align="center" data={data.Hs} style={style} /></Col>
                      <Col className='semi-col-my' span={4}><Descriptions align="center" data={data.Mt} style={style} /></Col>
                      <Col className='semi-col-my' span={4}><Descriptions align="center" data={data.Ds} style={style} /></Col>
                      <Col className='semi-col-my' span={4}><Descriptions align="center" data={data.Rg} style={style} /></Col>
                      <Col className='semi-col-my' span={4}><Descriptions align="center" data={data.Cn} style={style} /></Col>
                  </Row>
              </Col>
              <Col span={8}>
                  <Row>
                      <Col className='semi-col-my' span={4}><Descriptions align="center" data={data.Nh} style={style} /></Col>
                      <Col className='semi-col-my' span={4}><Descriptions align="center" data={data.Fl} style={style} /></Col>
                      <Col className='semi-col-my' span={4}><Descriptions align="center" data={data.Mc} style={style} /></Col>
                      <Col className='semi-col-my' span={4}><Descriptions align="center" data={data.Lv} style={style} /></Col>
                      <Col className='semi-col-my' span={4}><Descriptions align="center" data={data.Ts} style={style} /></Col>
                      <Col className='semi-col-my' span={4}><Descriptions align="center" data={data.Og} style={style} /></Col>
                  </Row>
              </Col>
          </Row>
          <Divider margin='12px'></Divider>
          <Row >
              <Col span={8}>
                  <Row>
                      <Col className='semi-col-my' span={4} offset={4}><Descriptions align="center" data={data.LX} style={LXstyle} /></Col>
                      <Col className='semi-col-my' span={4}><Descriptions align="center" data={data.La} style={LXstyle} /></Col>
                      <Col className='semi-col-my' span={4}><Descriptions align="center" data={data.Ce} style={LXstyle} /></Col>
                      <Col className='semi-col-my' span={4}><Descriptions align="center" data={data.Pr} style={LXstyle} /></Col>
                      <Col className='semi-col-my' span={4}><Descriptions align="center" data={data.Nd} style={LXstyle} /></Col>
                  </Row>
              </Col>
              <Col span={8}>
                  <Row>
                      <Col className='semi-col-my' span={4}><Descriptions align="center" data={data.Pm} style={LXstyle} /></Col>
                      <Col className='semi-col-my' span={4}><Descriptions align="center" data={data.Sm} style={LXstyle} /></Col>
                      <Col className='semi-col-my' span={4}><Descriptions align="center" data={data.Eu} style={LXstyle} /></Col>
                      <Col className='semi-col-my' span={4}><Descriptions align="center" data={data.Gd} style={LXstyle} /></Col>
                      <Col className='semi-col-my' span={4}><Descriptions align="center" data={data.Tb} style={LXstyle} /></Col>
                      <Col className='semi-col-my' span={4}><Descriptions align="center" data={data.Dy} style={LXstyle} /></Col>
                  </Row>
              </Col>
              <Col span={8}>
                  <Row>
                      <Col className='semi-col-my' span={4}><Descriptions align="center" data={data.Ho} style={LXstyle} /></Col>
                      <Col className='semi-col-my' span={4}><Descriptions align="center" data={data.Er} style={LXstyle} /></Col>
                      <Col className='semi-col-my' span={4}><Descriptions align="center" data={data.Tm} style={LXstyle} /></Col>
                      <Col className='semi-col-my' span={4}><Descriptions align="center" data={data.Yb} style={LXstyle} /></Col>
                      <Col className='semi-col-my' span={4}><Descriptions align="center" data={data.Lu} style={LXstyle} /></Col>
                  </Row>
              </Col>
          </Row>
          <Row >
              <Col span={8}>
                  <Row>
                      <Col className='semi-col-my' span={4} offset={4}><Descriptions align="center" data={data.AX} style={AXstyle} /></Col>
                      <Col className='semi-col-my' span={4}><Descriptions align="center" data={data.Ac} style={AXstyle} /></Col>
                      <Col className='semi-col-my' span={4}><Descriptions align="center" data={data.Th} style={AXstyle} /></Col>
                      <Col className='semi-col-my' span={4}><Descriptions align="center" data={data.Pa} style={AXstyle} /></Col>
                      <Col className='semi-col-my' span={4}><Descriptions align="center" data={data.U} style={AXstyle} /></Col>
                  </Row>
              </Col>
              <Col span={8}>
                  <Row>
                      <Col className='semi-col-my' span={4}><Descriptions align="center" data={data.Np} style={AXstyle} /></Col>
                      <Col className='semi-col-my' span={4}><Descriptions align="center" data={data.Pu} style={AXstyle} /></Col>
                      <Col className='semi-col-my' span={4}><Descriptions align="center" data={data.Am} style={AXstyle} /></Col>
                      <Col className='semi-col-my' span={4}><Descriptions align="center" data={data.Cm} style={AXstyle} /></Col>
                      <Col className='semi-col-my' span={4}><Descriptions align="center" data={data.Bk} style={AXstyle} /></Col>
                      <Col className='semi-col-my' span={4}><Descriptions align="center" data={data.Cf} style={AXstyle} /></Col>
                  </Row>
              </Col>
              <Col span={8}>
                  <Row>
                      <Col className='semi-col-my' span={4}><Descriptions align="center" data={data.Es} style={AXstyle} /></Col>
                      <Col className='semi-col-my' span={4}><Descriptions align="center" data={data.Fm} style={AXstyle} /></Col>
                      <Col className='semi-col-my' span={4}><Descriptions align="center" data={data.Md} style={AXstyle} /></Col>
                      <Col className='semi-col-my' span={4}><Descriptions align="center" data={data.No} style={AXstyle} /></Col>
                      <Col className='semi-col-my' span={4}><Descriptions align="center" data={data.Lr} style={AXstyle} /></Col>
                  </Row>
              </Col>
          </Row>
      </div>
  )
}