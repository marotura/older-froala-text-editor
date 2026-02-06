# older-froala-text-editor
This repository is for Laravel nova 3 with laravel 8 that uses vue 2 to make nova components 

### Important
This version was created for older laravel websites. **Do not** use this version for laravel 10 and up. **Nor** Laravel Nova 4 and up.

## Requirements
Make sure to add the following in your .env with you froala API Key.
FROALA_ACTIVATION_KEY="your-froala-access-key"

## Installation
Use composer to import package. Command is:
composer require marotura/older-froala-text-editor:1.0.0

## Usage
use Marotura\OlderFroalaTextEditor\FroalaTextEditor;

FroalaTextEditor::make('Text', 'text'),

## Resources
- [Froala editor documentation](https://froala.com/wysiwyg-editor/docs/getting-started).