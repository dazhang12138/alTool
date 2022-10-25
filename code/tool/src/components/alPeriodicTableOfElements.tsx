import {Breadcrumb, Col, Descriptions, Divider, Row, Typography} from "@douyinfe/semi-ui";
import {IconHome, IconPriceTag} from "@douyinfe/semi-icons";
import React from "react";
require('./AlPeriodicTableOfElements.css');
const { Title } = Typography;


const AlPeriodicTableOfElements = () => {

    const style = {
        boxShadow: 'var(--semi-shadow-elevated)',
        backgroundColor: 'var(--semi-color-bg-2)',
        borderRadius: '4px',
        padding: '3px',
        margin: '3px',
        // width: '100px',
    }

    const LXstyle = {
        boxShadow: 'var(--semi-shadow-elevated)',
        backgroundColor: 'rgb(242 201 171)',
        borderRadius: '4px',
        padding: '3px',
        margin: '3px',
        // width: '100px',
    }
    const AXstyle = {
        boxShadow: 'var(--semi-shadow-elevated)',
        backgroundColor: 'rgb(225 139 84)',
        borderRadius: '4px',
        padding: '3px',
        margin: '3px',
        // width: '100px',
    }

    const data = {
        //第一行
        H:[{value:'1'},{value:'H'},{value:'qīng'},{value:'氢'},{value:'1.0079'}],
        He:[{value:'2'},{value:'He'},{value:'hài'},{value:'氦'},{value:'4.003'}],
        //第二行
        Li:[{value:'3'},{value:'Li'},{value:'lǐ'},{value:'锂'},{value:'6.941'}],
        Be:[{value:'4'},{value:'Be'},{value:'pí'},{value:'陂'},{value:'9.012'}],
        B:[{value:'5'},{value:'B'},{value:'péng'},{value:'硼'},{value:'10.811'}],
        C:[{value:'6'},{value:'C'},{value:'tàn'},{value:'碳'},{value:'14.007'}],
        N:[{value:'7'},{value:'N'},{value:'dàn'},{value:'氮'},{value:'14.007'}],
        O:[{value:'8'},{value:'O'},{value:'yǎng'},{value:'氧'},{value:'15.999'}],
        F:[{value:'9'},{value:'F'},{value:'fú'},{value:'氟'},{value:'18.998'}],
        Ne:[{value:'10'},{value:'Ne'},{value:'nǎi'},{value:'氖'},{value:'20.180'}],
        //第三行
        Na:[{value:'11'},{value:'Na'},{value:'nà'},{value:'钠'},{value:'22.990'}],
        Mg:[{value:'12'},{value:'Mg'},{value:'měi'},{value:'镁'},{value:'24.305'}],
        Al:[{value:'13'},{value:'Al'},{value:'lǚ'},{value:'铝'},{value:'26.982'}],
        Si:[{value:'14'},{value:'Si'},{value:'gūi'},{value:'硅'},{value:'28.086'}],
        P:[{value:'15'},{value:'P'},{value:'lín'},{value:'磷'},{value:'30.974'}],
        S:[{value:'16'},{value:'S'},{value:'liú'},{value:'硫'},{value:'32.066'}],
        Cl:[{value:'17'},{value:'Cl'},{value:'lǜ'},{value:'氯'},{value:'35.453'}],
        Ar:[{value:'18'},{value:'Ar'},{value:'yà'},{value:'氩'},{value:'39.948'}],
        //第四行
        K:[{value:'19'},{value:'K'},{value:'jiǎ'},{value:'钾'},{value:'39.098'}],
        Ca:[{value:'20'},{value:'Ca'},{value:'gài'},{value:'钙'},{value:'40.08'}],
        Sc:[{value:'21'},{value:'Sc'},{value:'kàng'},{value:'钪'},{value:'44.956'}],
        Ti:[{value:'22'},{value:'Ti'},{value:'tài'},{value:'钛'},{value:'47.88'}],
        V:[{value:'23'},{value:'V'},{value:'fán'},{value:'钒'},{value:'50.942'}],
        Cr:[{value:'24'},{value:'Cr'},{value:'gè'},{value:'铬'},{value:'51.996'}],
        Mn:[{value:'25'},{value:'Mn'},{value:'měng'},{value:'锰'},{value:'54.938'}],
        Fe:[{value:'26'},{value:'Fe'},{value:'tiě'},{value:'铁'},{value:'55.847'}],
        Co:[{value:'27'},{value:'Co'},{value:'gǔ'},{value:'钴'},{value:'58.933'}],
        Ni:[{value:'28'},{value:'Ni'},{value:'niè'},{value:'镍'},{value:'58.69'}],
        Cu:[{value:'29'},{value:'Cu'},{value:'tóng'},{value:'铜'},{value:'63.546'}],
        Zn:[{value:'30'},{value:'Zn'},{value:'xīn'},{value:'锌'},{value:'65.39'}],
        Ga:[{value:'31'},{value:'Ga'},{value:'jiā'},{value:'镓'},{value:'69.723'}],
        Ge:[{value:'32'},{value:'Ge'},{value:'zhě'},{value:'锗'},{value:'72.61'}],
        As:[{value:'33'},{value:'As'},{value:'shēn'},{value:'砷'},{value:'74.922'}],
        Se:[{value:'34'},{value:'Se'},{value:'xī'},{value:'硒'},{value:'78.96'}],
        Br:[{value:'35'},{value:'Br'},{value:'xiù'},{value:'溴'},{value:'79.904'}],
        //第五行
        Kr:[{value:'36'},{value:'Kr'},{value:'kè'},{value:'氪'},{value:'83.80'}],
        Rb:[{value:'37'},{value:'Rb'},{value:'rú'},{value:'铷'},{value:'85.47'}],
        Sr:[{value:'38'},{value:'Sr'},{value:'sī'},{value:'锶'},{value:'87.62'}],
        Y:[{value:'39'},{value:'Y'},{value:'yǐ'},{value:'钇'},{value:'88.906'}],
        Zr:[{value:'40'},{value:'Zr'},{value:'gào'},{value:'锆'},{value:'91.224'}],
        Nb:[{value:'41'},{value:'Nb'},{value:'ní'},{value:'铌'},{value:'92.906'}],
        Mo:[{value:'42'},{value:'Mo'},{value:'mù'},{value:'钼'},{value:'95.95'}],
        Tc:[{value:'43'},{value:'Tc'},{value:'dé'},{value:'锝'},{value:'(98)'}],
        Ru:[{value:'44'},{value:'Ru'},{value:'liǎo'},{value:'钌'},{value:'101.07'}],
        Rh:[{value:'45'},{value:'Rh'},{value:'lǎo'},{value:'铑'},{value:'102.91'}],
        Pd:[{value:'46'},{value:'Pd'},{value:'bǎ'},{value:'钯'},{value:'106.42'}],
        Ag:[{value:'47'},{value:'Ag'},{value:'yín'},{value:'银'},{value:'107.87'}],
        Cd:[{value:'48'},{value:'Cd'},{value:'gé'},{value:'镉'},{value:'112.41'}],
        In:[{value:'49'},{value:'In'},{value:'yīn'},{value:'铟'},{value:'114.82'}],
        Sn:[{value:'50'},{value:'Sn'},{value:'xī'},{value:'锡'},{value:'118.17'}],
        Sb:[{value:'51'},{value:'Sb'},{value:'tī'},{value:'锑'},{value:'121.75'}],
        Te:[{value:'52'},{value:'Te'},{value:'dì'},{value:'碲'},{value:'127.60'}],
        I:[{value:'53'},{value:'I'},{value:'diǎn'},{value:'碘'},{value:'126.90'}],
        Xe:[{value:'54'},{value:'Xe'},{value:'xiān'},{value:'氙'},{value:'131.29'}],
        //第六行
        Cs:[{value:'55'},{value:'Cs'},{value:'sè'},{value:'铯'},{value:'132.90'}],
        Ba:[{value:'56'},{value:'Ba'},{value:'bèi'},{value:'钡'},{value:'137.33'}],
        LX:[{value:'57-71'},{value:'镧系'},{value:''},{value:''},{value:''},{value:''},{value:''}],
        Hf:[{value:'72'},{value:'Hf'},{value:'hā'},{value:'铪'},{value:'178.49'}],
        Ta:[{value:'73'},{value:'Ta'},{value:'tǎn'},{value:'钽'},{value:'180.95'}],
        W:[{value:'74'},{value:'W'},{value:'wū'},{value:'钨'},{value:'183.85'}],
        Re:[{value:'75'},{value:'Re'},{value:'lái'},{value:'铼'},{value:'186.21'}],
        Os:[{value:'76'},{value:'Os'},{value:'é'},{value:'锇'},{value:'190.2'}],
        Ir:[{value:'77'},{value:'Ir'},{value:'yī'},{value:'铱'},{value:'192.22'}],
        Pt:[{value:'78'},{value:'Pt'},{value:'bó'},{value:'铂'},{value:'195.08'}],
        Au:[{value:'79'},{value:'Au'},{value:'jīn'},{value:'金'},{value:'196.97'}],
        Hg:[{value:'80'},{value:'Hg'},{value:'gǒng'},{value:'汞'},{value:'200.59'}],
        Tl:[{value:'81'},{value:'Tl'},{value:'tā'},{value:'铊'},{value:'204.38'}],
        Pb:[{value:'82'},{value:'Pb'},{value:'qiān'},{value:'铅'},{value:'207.2'}],
        Bi:[{value:'83'},{value:'Bi'},{value:'bì'},{value:'铋'},{value:'208.98'}],
        Po:[{value:'84'},{value:'Po'},{value:'pō'},{value:'钋'},{value:'(209)'}],
        At:[{value:'85'},{value:'At'},{value:'ài'},{value:'砹'},{value:'(210)'}],
        Rn:[{value:'86'},{value:'Rn'},{value:'dōng'},{value:'氡'},{value:'(222)'}],
        //第七行
        Fr:[{value:'87'},{value:'Fr'},{value:'fāng'},{value:'钫'},{value:'(223)'}],
        Ra:[{value:'88'},{value:'Ra'},{value:'léi'},{value:'镭'},{value:'(226)'}],
        AX:[{value:'89-103'},{value:'锕系'},{value:''},{value:''},{value:''},{value:''},{value:''}],
        Rf:[{value:'104'},{value:'Rf'},{value:'lú'},{value:'𬬻'},{value:'(265)'}],
        Db:[{value:'105'},{value:'Db'},{value:'dù'},{value:'𬭊'},{value:'(268)'}],
        Sg:[{value:'106'},{value:'Sg'},{value:'xǐ'},{value:'𬭳'},{value:'(271)'}],
        Bh:[{value:'107'},{value:'Bh'},{value:'bō'},{value:'𬭛'},{value:'(270)'}],
        Hs:[{value:'108'},{value:'Hs'},{value:'hēi'},{value:'𬭶'},{value:'(277)'}],
        Mt:[{value:'109'},{value:'Mt'},{value:'mài'},{value:'鿏'},{value:'(276)'}],
        Ds:[{value:'110'},{value:'Ds'},{value:'Dá'},{value:'𫟼'},{value:'(281)'}],
        Rg:[{value:'111'},{value:'Rg'},{value:'lún'},{value:'𬬭'},{value:'(280)'}],
        Cn:[{value:'112'},{value:'Cn'},{value:'gē'},{value:'鎶'},{value:'(285)'}],
        Nh:[{value:'113'},{value:'Nh'},{value:'nǐ'},{value:'鉨'},{value:'(284)'}],
        Fl:[{value:'114'},{value:'Fl'},{value:'fū'},{value:'鈇'},{value:'(289)'}],
        Mc:[{value:'115'},{value:'Mc'},{value:'mò'},{value:'镆'},{value:'(288)'}],
        Lv:[{value:'116'},{value:'Lv'},{value:'Iì'},{value:'鉝'},{value:'(293)'}],
        Ts:[{value:'117'},{value:'Ts'},{value:'tián'},{value:'石田'},{value:'(294)'}],
        Og:[{value:'118'},{value:'Og'},{value:'ào'},{value:'气奥'},{value:'(294)'}],
        //镧系
        La:[{value:'57'},{value:'La'},{value:'lán'},{value:'镧'},{value:'138.91'}],
        Ce:[{value:'58'},{value:'Ce'},{value:'shì'},{value:'铈'},{value:'140.12'}],
        Pr:[{value:'59'},{value:'Pr'},{value:'pǔ'},{value:'镨'},{value:'140.91'}],
        Nd:[{value:'60'},{value:'Nd'},{value:'nǚ'},{value:'钕'},{value:'144.24'}],
        Pm:[{value:'61'},{value:'Pm'},{value:'pǒ'},{value:'钷'},{value:'(145)'}],
        Sm:[{value:'62'},{value:'Sm'},{value:'shān'},{value:'钐'},{value:'150.36'}],
        Eu:[{value:'63'},{value:'Eu'},{value:'yǒu'},{value:'铕'},{value:'151.96'}],
        Gd:[{value:'64'},{value:'Gd'},{value:'gá'},{value:'钆'},{value:'157.25'}],
        Tb:[{value:'65'},{value:'Tb'},{value:'tè'},{value:'铽'},{value:'158.92'}],
        Dy:[{value:'66'},{value:'Dy'},{value:'dí'},{value:'镝'},{value:'162.50'}],
        Ho:[{value:'67'},{value:'Ho'},{value:'huǒ'},{value:'钬'},{value:'164.93'}],
        Er:[{value:'68'},{value:'Er'},{value:'ěr'},{value:'铒'},{value:'167.26'}],
        Tm:[{value:'69'},{value:'Tm'},{value:'diū'},{value:'铥'},{value:'168.93'}],
        Yb:[{value:'70'},{value:'Yb'},{value:'yì'},{value:'镱'},{value:'173.04'}],
        Lu:[{value:'71'},{value:'Lu'},{value:'lǔ'},{value:'镥'},{value:'174.97'}],
        //锕系
        Ac:[{value:'89'},{value:'Ac'},{value:'ā'},{value:'锕'},{value:'(227)'}],
        Th:[{value:'90'},{value:'Th'},{value:'tǔ'},{value:'钍'},{value:'232.04'}],
        Pa:[{value:'91'},{value:'Pa'},{value:'pú'},{value:'镤'},{value:'231'}],
        U:[{value:'92'},{value:'U'},{value:'yóu'},{value:'铀'},{value:'238.03'}],
        Np:[{value:'93'},{value:'Np'},{value:'ná'},{value:'镎'},{value:'(237)'}],
        Pu:[{value:'94'},{value:'Pu'},{value:'bù'},{value:'钚'},{value:'(244)'}],
        Am:[{value:'95'},{value:'Am'},{value:'méi'},{value:'镅'},{value:'(243)'}],
        Cm:[{value:'96'},{value:'Cm'},{value:'jú'},{value:'锔'},{value:'(247)'}],
        Bk:[{value:'97'},{value:'Bk'},{value:'péi'},{value:'锫'},{value:'(247)'}],
        Cf:[{value:'98'},{value:'Cf'},{value:'kāi'},{value:'锎'},{value:'(251)'}],
        Es:[{value:'99'},{value:'Es'},{value:'āi'},{value:'锿'},{value:'(252)'}],
        Fm:[{value:'100'},{value:'Fm'},{value:'fèi'},{value:'镄'},{value:'(257)'}],
        Md:[{value:'101'},{value:'Md'},{value:'mén'},{value:'钔'},{value:'(258)'}],
        No:[{value:'102'},{value:'No'},{value:'nuò'},{value:'锘'},{value:'(259)'}],
        Lr:[{value:'103'},{value:'Lr'},{value:'láo'},{value:'铹'},{value:'(262)'}],
    }

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

export default AlPeriodicTableOfElements;