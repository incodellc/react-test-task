import React, { useMemo, useEffect } from 'react';
import { Table } from 'semantic-ui-react';
import {useDispatch, useSelector} from 'react-redux';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import classNames from 'classnames';
import upArrow from '../../assets/up-arrow.svg';
import downArrow from '../../assets/down-arrow.svg';
import {changeData} from '../../actions/stockTickerActions';
import {getCurrentData, getCustomFetchInterval} from '../../selectors/selectors';
import './StockActivityTable.scss';

const StockActivityTable = ({data = {}}) => {
    const dispatch = useDispatch();
    const customFetchInterval = useSelector(getCustomFetchInterval);
    const currentData = useSelector(getCurrentData);

    const renderArrow = useMemo(() => {
        if (!isEmpty(data)) {
            if (data.change > 0) return <img className="StockActivityTable__img" src={upArrow} width={15}/>;
            return <img className="StockActivityTable__img" src={downArrow} width={15}/>;
        }
        return null;
    }, [data]);

    useEffect(() => {
        if (customFetchInterval) {
            const timer = setTimeout(
                () => {
                    dispatch(changeData());
                },
                customFetchInterval
            );

            return () => clearTimeout(timer);
        }
    }, [customFetchInterval, currentData]);

    return (
        <Table className="StockActivityTable" celled selectable unstackable inverted>
            <Table.Header className="StockActivityTable__header">
                <Table.Row>
                    <Table.HeaderCell width={1}>SYMBOL</Table.HeaderCell>
                    <Table.HeaderCell width={1}>EXCHANGE</Table.HeaderCell>
                    <Table.HeaderCell width={1}>LAST</Table.HeaderCell>
                    <Table.HeaderCell width={1}>CHANGE</Table.HeaderCell>
                    <Table.HeaderCell width={1}>CHANGE PERCENTAGE</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                <Table.Row>
                    <Table.Cell className="StockActivityTable__cell" width={1}>{data.ticker}</Table.Cell>
                    <Table.Cell className="StockActivityTable__cell" width={1}>{data.exchange}</Table.Cell>
                    <Table.Cell className={classNames('StockActivityTable__price', {down: data.change < 0})} width={1}>{renderArrow}{data.price}</Table.Cell>
                    <Table.Cell className={classNames('StockActivityTable__price', {down: data.change < 0})} width={1}>{renderArrow}{data.change}</Table.Cell>
                    <Table.Cell className={classNames('StockActivityTable__price', {down: data.change < 0})} width={1}>{renderArrow}{data.changePercent}</Table.Cell>
                </Table.Row>
            </Table.Body>
        </Table>
    );
};

StockActivityTable.propTypes = {
    data: PropTypes.shape(),
};

export default StockActivityTable;
