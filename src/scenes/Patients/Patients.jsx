import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Button from '../../components/generics/Button/Button';
import SelectInput from '../../components/generics/SelectInput/SelectInput';
import FilterIcon from '../../assets/icons/filter.png';
import './Patients.scss';

const styles = {
  appBar: {
    position: 'relative',
  },
  toolBar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  title: {
    color: '#036064',
  },
  form: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  graphContent: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  graph: {
    width: '100%',
  },
};

class Patients extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      graph: null,
      openGraph: false,
      ward: '',
      openFilterDialog: false,
    };
    this.handleGraphClick = this.handleGraphClick.bind(this);
    this.handleCloseGraph = this.handleCloseGraph.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFilterClick = this.handleFilterClick.bind(this);
    this.handleCloseFilter = this.handleCloseFilter.bind(this);
  }

  transition(props) {
    return <Slide direction='up' {...props} />;
  }

  handleGraphClick(event, index) {
    event.preventDefault();
    this.setState({
      openGraph: true,
      graph: index,
    });
  }

  handleCloseGraph() {
    this.setState({
      openGraph: false,
    });
  }

  openGraph(classes) {
    return (
      <Dialog
        fullScreen
        open={this.state.openGraph}
        onClose={this.handleCloseGraph}
        TransitionComponent={this.transition}>
        <AppBar className={classes.appBar} color='inherit'>
          <Toolbar className={classes.toolBar}>
            <h4 className={classes.title}>Nome do gráfico</h4>
            <IconButton
              color='inherit'
              onClick={this.handleCloseGraph}
              aria-label='Fechar'>
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <div className={classes.graphContent}>
          <img
            className={classes.graph}
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/ScientificGraphSpeedVsTime.svg/300px-ScientificGraphSpeedVsTime.svg.png'
            alt='grafico'
          />
        </div>
      </Dialog>
    );
  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;
    let value = target.value;
    if (value === 'null') {
      value = '';
    }
    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.state.ward === '0') {
      this.setState({
        ward: '',
      });
    }
    console.log(this.state.ward);
  }

  handleFilterClick() {
    this.setState({
      openFilterDialog: true,
    });
  }

  handleCloseFilter() {
    this.setState({
      openFilterDialog: false,
    });
  }

  openFilterDialog(classes) {
    return (
      <Dialog
        fullScreen
        open={this.state.openFilterDialog}
        onClose={this.handleCloseFilter}
        TransitionComponent={this.transition}>
        <AppBar className={classes.appBar} color='inherit'>
          <Toolbar className={classes.toolBar}>
            <h4 className={classes.title}>Filtrar pacientes</h4>
            <IconButton
              color='inherit'
              onClick={this.handleCloseFilter}
              aria-label='Fechar'>
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <form className={classes.form} method='post'>
          <SelectInput
            name='ward'
            text='Ala hospitalar'
            required={true}
            multiple={false}
            onChange={this.handleChange}
            defaultValueText='Todas'
            options={[
              {
                id: 1,
                name: 'UTI',
              },
              {
                id: 2,
                name: 'Oncologia',
              },
              {
                id: 3,
                name: 'Pediatria',
              },
            ]}
          />
          <Button
            primary={true}
            type='submit'
            size='big'
            text='Filtrar'
            onClick={this.handleSubmit}
          />
        </form>
      </Dialog>
    );
  }

  render() {
    const { classes } = this.props;

    return (
      <div className='patients'>
        <div className='patients__header'>
          <h3 className='title'>Pacientes</h3>
          <img
            className='filter-icon'
            src={FilterIcon}
            alt='Filtrar'
            onClick={this.handleFilterClick}
          />
        </div>
        <div className='patients__graphs'>
          <div
            className='graph'
            onClick={event => this.handleGraphClick(event, 0)}>
            <div className='graph__name'>Nome do gráfico</div>
          </div>
          <div className='graph'>
            <div className='graph__name'>Nome do gráfico</div>
          </div>
        </div>
        {this.openGraph(classes)}
        {this.openFilterDialog(classes)}
      </div>
    );
  }
}

export default withStyles(styles)(Patients);
