import React, { Component } from 'react';
import { Picker, Text, View } from 'react-native';
import { connect } from 'react-redux';

import { employeeUpdate } from '../actions';
import { CardSection, Input } from './common';


const { Item } = Picker;

class EmployeeForm extends Component {
  render() {
    const { pickerStyle, pickerTextStyle, containerStyle } = styles;

    return (
      <View>
        <CardSection>
          <Input
            label="Name"
            placeholder="Jane"
            value={this.props.name}
            onChangeText={value => this.props.employeeUpdate({ prop: 'name', value })}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Phone"
            placeholder="555-555-5555"
            value={this.props.phone}
            onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value })}
          />
        </CardSection>

        <CardSection style={containerStyle}>
          <Text style={pickerTextStyle}>Shift</Text>
          <Picker
            style={pickerStyle}
            selectedValue={this.props.shift}
            onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}
          >
            <Item label="Monday" value="Monday" />
            <Item label="Tuesday" value="Tuesday" />
            <Item label="Wednesday" value="Wednesday" />
            <Item label="Thursday" value="Thursday" />
            <Item label="Friday" value="Friday" />
            <Item label="Saturday" value="Saturday" />
            <Item label="Sunday" value="Sunday" />
          </Picker>
        </CardSection>
      </View>
      );
  }
}

const styles = {
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1
  },
  pickerStyle: {
    paddingRight: 5,
    paddingLeft: 5,
    flex: 2
  },
  containerStyle: {
    flexDirection: 'row',
    alignItems: 'center'
  }
};

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};

export default connect(
  mapStateToProps,
  { employeeUpdate }
)(EmployeeForm);
