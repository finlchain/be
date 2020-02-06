const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const router = express.Router();
const child_process = require('child_process').execFile;
const multer = require('multer');
const upload = multer({ dest: 'KeyUpload/' });
const fs = require('fs');

const KeyCreate = '1';
const KeyRestoration = '2';
const KeyAdd = '3';
const ChangeUserID = '4';
const ChangeUserKey = '5';
const KeyStatus = '6';
const Transaction = '7';

const CLI_FileName = './finl_cli';

const Command_add = '--add';
const Command_id = '--id';
const Command_password = '--password';
const Command_color = '--color';
const Command_shape = '--shape';
const Command_change_userid = '--change_userid';
const Command_change_userkey = '--change_userkey';
const Command_tx = '--tx';
const Command_snd = '--snd';
const Command_rcv = '--rcv';
const Command_amount = '--amount';
const Command_sentence1 = '--1_sentence';
const Command_sentence2 = '--2_sentence';
const Command_algorithm = '--algorithm';
const Command_email = '--email';
const Command_create = '--create';
const Command_restoration = '--restoration';
const Command_network_pubkey = '--network_pubkey';
const Command_randomnumber = '--randomnumber';
const Command_json = '--json';
const Command_pubcheck = '--pub_check';
const Command_enc_pwd = '--enc_pwd';


const allowCORS = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'POST');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    (req.mothoed === 'OPTIONS') ?
        res.send(200) :
        next();
};

router.get('/', function (req, res, next) {
    res.send(404);
});




app.listen(3000, () => {
    console.log('post server open');
});

app.use(allowCORS);
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);

function IsJsonString(str) {
    try {
        var json = JSON.parse(str);
        return (typeof json === 'object');
    } catch (e) {
        return false;
    }
}

router.post('/save', upload.single('files'), function (req, res, next) {


    let KeyFile = req.file;

	if(KeyFile == null){
		res.send({ result: false, msg: 'error : NotFile'});
		return false;
	}

    if (KeyFile.size > 100 && KeyFile.size < 300) {

        if (req.body.Kind === KeyAdd) {

            if (req.body.Password === '' || req.body.color === '' || req.body.shape === '' || req.body.id === '' || req.body.PublicKey === '') {
                res.send({ result: false, msg: 'data error' });
            }
			else{
				child_process(CLI_FileName, [Command_add, KeyFile.path, Command_id, req.body.id, Command_password, req.body.Password, Command_color, req.body.color, Command_shape, req.body.shape , Command_pubcheck ,req.body.PublicKey], (err, stdout, stderr) => {
					if (err || stderr) {
						res.send({ result: false, msg: 'error' });
					}
					else if (stdout.toString().indexOf('Success') !== -1) {
						res.send({ result: true, msg: 'success' });
					}
					else {
						res.send({ result: false, msg: 'error : ' + stdout.toString() });
					}                  

					//else if (IsJsonString(stdout.toString()) === false) {
					//    res.send({ result: false, msg: 'error : ' + stdout.toString() });
					//}
					//else {
					//    res.send({ result: true, msg: 'success' });
					//}
					fs.unlink(KeyFile.path, function (err) {
					});
				});
			}
        }
        else if (req.body.Kind === ChangeUserID) {

            if (req.body.Password === '' || req.body.color === '' || req.body.shape === '' || req.body.id === '') {
                res.send({ result: false, msg: 'data error' });
            }
			else{
				child_process(CLI_FileName, [Command_change_userid, KeyFile.path, Command_id, req.body.id, Command_password, req.body.Password, Command_color, req.body.color, Command_shape, req.body.shape], (err, stdout, stderr) => {
					if (err || stderr) {
						res.send({ result: false, msg: 'error' });
					}
					else if (stdout.toString().indexOf('Success(UserChangeID)') !== -1) {
						res.send({ result: true, msg: 'success' });
					}
					else {
						res.send({ result: false, msg: 'error : ' + stdout.toString() });
					}  
					//else if (IsJsonString(stdout.toString()) === false) {
					//    res.send({ result: false, msg: 'error : ' + stdout.toString() });
					//}
					//else {
					//    res.send({ result: true, msg: 'success' });
					//}
					fs.unlink(KeyFile.path, function (err) {
					});
				});
			}
        }
        else if (req.body.Kind === ChangeUserKey) {


            if (req.body.Password === '' || req.body.color === '' || req.body.shape === '' || req.body.id === '' || req.body.PublicKey === '') {
                res.send({ result: false, msg: 'data error' });
            }
			else{
				child_process(CLI_FileName, [Command_change_userkey, KeyFile.path, Command_id, req.body.id, Command_password, req.body.Password, Command_color, req.body.color,Command_shape, req.body.shape, Command_pubcheck, req.body.PublicKey], (err, stdout, stderr) => {
					if (err || stderr) {
						res.send({ result: false, msg: 'error' });
					}
					else if (stdout.toString().indexOf('Success(UserChangePublicKey)') !== -1) {
						res.send({ result: true, msg: 'success' });
					}
					else {
						res.send({ result: false, msg: 'error : ' + stdout.toString() });
					}  
					//else if (IsJsonString(stdout.toString()) === false) {
					//    res.send({ result: false, msg: 'error : ' + stdout.toString() });
					//}
					//else {
					//    res.send({ result: true, msg: 'success' });
					//}
					fs.unlink(KeyFile.path, function (err) {
					});
				});
			}
        }
        else if (req.body.Kind === Transaction) {

            if (req.body.Password === '' || req.body.color === '' || req.body.shape === '' || req.body.amount === '' || req.body.rcv === '') {
                res.send({ result: false, msg: 'data error' });
            }
			else{
				child_process(CLI_FileName, [Command_tx, Command_snd, KeyFile.path, Command_rcv, req.body.rcv, Command_amount, req.body.amount, Command_password, req.body.Password, Command_color, req.body.color, Command_shape, req.body.shape], (err, stdout, stderr) => {
					if (err || stderr) {
						res.send({ result: false, msg: 'error' });
					}
					else if (stdout.toString().indexOf('Success(-)') !== -1) {
						res.send({ result: true, msg: 'success' });
					}
					else {
						res.send({ result: false, msg: 'error : ' + stdout.toString() });
					}       
					//else if (IsJsonString(stdout.toString()) === false) {
					//    res.send({ result: false, msg: 'error : ' + stdout.toString() });
					//}
					//else {
					//    res.send({ result: true, msg: 'success' });
					//}
					fs.unlink(KeyFile.path, function (err) {
					});
				});
			}
        }
        else {
            fs.unlink(KeyFile.path, function (err) {
                res.send({ result: false, msg: 'error' });
            });
        }
    }
	else{
		fs.unlink(KeyFile.path, function (err) {});
		res.send({ result: false, msg: 'file error' });
	}
});

router.post('/', function (req, res, next) {

    if (req.body.Kind === KeyCreate) {

        if (req.body.Password === '' || req.body.sentence1 === '' || req.body.sentence2 === '' || req.body.color === '' || req.body.shape === '' || req.body.algorithm === '' || req.body.email === '' || req.body.EncPassword === '') {
            res.send({ result: false, msg: 'data error' });
        }
		else{

			child_process(CLI_FileName, [Command_create, req.body.Password, Command_sentence1, req.body.sentence1, Command_sentence2, req.body.sentence2, Command_color, req.body.color, Command_shape, req.body.shape, Command_algorithm, req.body.algorithm, Command_email, req.body.email , Command_enc_pwd ,req.body.EncPassword], (err, stdout, stderr) => {
				if (err || stderr) {
					res.send({ result: false, msg: 'error' });
				}
				else if (IsJsonString(stdout.toString()) === false) {
					res.send({ result: false, msg: 'error : ' + stdout.toString() });
				}
				else {
					res.send({ result: true, msg: 'success' });
				}
			});
		}
    }
    else if (req.body.Kind === KeyRestoration) {

        if (req.body.Password === '' || req.body.sentence1 === '' || req.body.sentence2 === '' || req.body.color === '' || req.body.shape === '' || req.body.algorithm === '' || req.body.email === '' || req.body.RandomNumber === ''|| req.body.EncPassword === '') {
            res.send({ result: false, msg: 'data error' });
        }
		else{
			child_process(CLI_FileName, [Command_restoration, req.body.Password, Command_sentence1, req.body.sentence1, Command_sentence2, req.body.sentence2, Command_color, req.body.color, Command_shape, req.body.shape, Command_algorithm, req.body.algorithm, Command_email, req.body.email, Command_randomnumber, req.body.RandomNumber, Command_enc_pwd ,req.body.EncPassword], (err, stdout, stderr) => {
				if (err || stderr) {
					res.send({ result: false, msg: 'error' });
				}
				else if (IsJsonString(stdout.toString()) === false) {
					res.send({ result: false, msg: 'error : ' + stdout.toString() });
				}
				else {
					res.send({ result: true, msg: 'success' });
				}
			});
		}
    }
    else if (req.body.Kind === KeyStatus) {

        if (req.body.publickey === '') {
            res.send({ result: false, msg: 'data error' });
        }
		else{
        child_process(CLI_FileName, [Command_json,Command_network_pubkey, req.body.publickey], (err, stdout, stderr) => {
				if (err || stderr) {
					res.send({ result: false, msg: 'error' });
				}
				//else if (IsJsonString(stdout.toString()) === false) {
				//    res.send({ result: false, msg: 'error : ' + stdout.toString() });
				//}
				else {
					res.send({ result: true, msg: stdout.toString() });
				}
			});
		}
    }
    else {
        res.send({ result: false, msg: 'error' });

    }

});
