import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import FormWallet from '../components/FormWallet';
import ExpenseTable from '../components/ExpenseTable';
import EditWallet from '../components/EditWallet';

class Wallet extends React.Component {
  render() {
    const { inEditing } = this.props;
    return (
      <div>
        <Header />
        { inEditing ? <EditWallet /> : <FormWallet />}
        <ExpenseTable />
      </div>
    );
  }
}

const mapStateToProps = ({ edit }) => ({
  inEditing: edit.inEditing.edit,
  expenseEdit: edit.inEditing.expenseEdit,
});

Wallet.propTypes = {
  inEditing: PropTypes.bool.isRequired,
  expenseEdit: PropTypes.shape({}).isRequired,
};

export default connect(mapStateToProps)(Wallet);
