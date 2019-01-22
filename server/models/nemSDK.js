/**
 * nem-library 0.5.1
 */
import {
    NEMLibrary, NetworkTypes, Address, TransferTransaction, TimeWindow,
    MosaicHttp, TransactionHttp, Account, EmptyMessage
} from "nem-library";
import { Observable } from "rxjs/Observable";

//declare let process: any;

// Initialize NEMLibrary for TEST_NET Network
NEMLibrary.bootstrap(NetworkTypes.TEST_NET);

// Replace with a cosignatory private key
const privateKey = process.env.PRIVATE_KEY;

const transactionHttp = new TransactionHttp();
const mosaicHttp = new MosaicHttp();
const account = Account.createWithPrivateKey(privateKey);

Observable.from([
    { namespace: "mynamespace", mosaic: "mosaic1", quantity: 10 },
    { namespace: "mynamespace", mosaic: "mosaic2", quantity: 10 },
    { namespace: "mynamespace", mosaic: "mosaic3", quantity: 10 }
]).flatMap(_ => mosaicHttp.getMosaicTransferableWithAmount(_.namespace, _.mosaic, _.quantity))
    .toArray()
    .map(mosaics => TransferTransaction.createWithMosaics(
        TimeWindow.createWithDeadline(),
        new Address("TBV7LE4TFDEMGVOON5MYOK2P7TU2KEKLMHOLHQT6"),
        mosaics,
        EmptyMessage
    )
    )
    .map(transaction => account.signTransaction(transaction))
    .flatMap(signedTransaction => transactionHttp.announceTransaction(signedTransaction))
    .subscribe(nemAnnounceResult => {
        console.log(nemAnnounceResult);
    })