# Metric

Provide metrics by HTTP GET ‘http://SERVER_IP:RPC_PORT/metrics’

Integrated with [prometheus](https://prometheus.io/)
* suffix-rule of metric
  - _duration : time value (unit : msec)
  - _cnt : number of events
  - _sum : sum of values
  
## Consensus

| Metric                    | Description                          |
|:--------------------------|:-------------------------------------|
| consensus_height          | Height of Propose-Block              |
| consensus_height_duration | Consensus Duration of Previous Block |
| consensus_round           | Current Consensus Round              |
| consensus_round_duration  | Duration of Previous Consensus Round |


## Transaction Latency

| Metric             | Description                                                  |
|:-------------------|:-------------------------------------------------------------|
| txlatency_commit   | Average of commit latency (msec) of transactions from user   |
| txlatency_finalize | Average of finalize latency (msec) of transactions from user |


## Transaction Pool
Accumulated number and bytes of processed transactions
 
### From any
Received transactions via p2p and json-rpc

| Metric            | Description                                      |
|:------------------|:-------------------------------------------------|
| txpool_add_cnt    | accumulated number of add transactions           |
| txpool_add_sum    | accumulated bytes of add transactions            |
| txpool_drop_cnt   | accumulated number of drop invalid-transactions  |
| txpool_drop_sum   | accumulated bytes of drop invalid-transactions   |
| txpool_remove_cnt | accumulated number of remove valid-transactions  |
| txpool_remove_sum | accumulated bytes of remove valid-transactions   |


### From user
Received transactions via json-rpc

| Metric                 | Description                                     |
|:-----------------------|:------------------------------------------------|
| txpool_user_add_cnt    | accumulated number of add transactions          |
| txpool_user_add_sum    | accumulated bytes of add transactions           |
| txpool_user_drop_cnt   | accumulated number of drop invalid-transactions |
| txpool_user_drop_sum   | accumulated bytes of drop invalid-transactions  |
| txpool_user_remove_cnt | accumulated number of remove valid-transactions |
| txpool_user_remove_sum | accumulated bytes of remove valid-transactions  |


## Network traffic
Accumulated number and bytes of network packets 

| Metric           | Description                           |
|:-----------------|:--------------------------------------|
| network_recv_cnt | accumulated number of receive packets |
| network_recv_sum | accumulated bytes of receive packets  |
| network_send_cnt | accumulated number of send packets    |
| network_send_sum | accumulated bytes of send packets     |

## JsonRpc
Especially suffix `_avg` of JsonRpc metrics means moving average of response time

| Metric                       | Description                                               |
|:-----------------------------|:----------------------------------------------------------|
| jsonrpc_failure_cnt          | accumulated number of json-rpc failures                   |
| jsonrpc_failure_avg          | moving average of json-rpc failures                       |
| jsonrpc_retrieve_cnt         | accumulated number of json-rpc retrieve methods           |
| jsonrpc_retrieve_avg         | moving average of json-rpc retrieve methods               |
| jsonrpc_send_transaction_cnt | accumulated number of json-rpc icx_sendTransaction method |
| jsonrpc_send_transaction_avg | moving average of json-rpc icx_sendTransaction methods    |
| jsonrpc_call_cnt             | accumulated number of json-rpc icx_call method            |
| jsonrpc_call_avg             | moving average of json-rpc icx_call methods               |
| jsonrpc_get_trace_cnt        | accumulated number of json-rpc debug_getTrace method      |
| jsonrpc_get_trace_avg        | moving average of json-rpc debug_getTrace methods         |
| jsonrpc_estimate_step_cnt    | accumulated number of json-rpc debug_estimateStep method  |
| jsonrpc_estimate_step_avg    | moving average of json-rpc debug_estimateStep methods     |
