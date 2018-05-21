The «How to use Mediaclip Design Tool» popup for [albumenvy.com](https://albumenvy.com).

## How to install
```
composer require albumenvy/popup:*
bin/magento setup:upgrade
rm -rf pub/static/* && bin/magento setup:static-content:deploy -f
rm -rf var/di var/generation generated/code && bin/magento setup:di:compile
```
If you have some problems while executing these commands, then check the [detailed instruction](https://mage2.pro/t/263).

## Screenshots
### Backend
![](https://mage2.pro/uploads/default/original/2X/c/ccb0f71d6f1bada5a4d4ed6f4c4fd08a2e9d126b.png)

![](https://mage2.pro/uploads/default/original/2X/1/18f6a4efdade4c3de7c975410ae7b5d6c61096e5.png) 
### Frontend
![](https://mage2.pro/uploads/default/original/2X/6/6a754fc44403cde88f9def2e3a9a1a45908fdbe6.png)