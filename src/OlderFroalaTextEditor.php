<?php

namespace Marotura\OlderFroalaTextEditor;

use Laravel\Nova\Fields\Field;

class OlderFroalaTextEditor extends Field
{
    /**
     * The field's component.
     *
     * @var string
     */
    public $component = 'older-froala-text-editor';

    public function __construct($name, $attribute = null, $resolveCallback = null)
    {
        parent::__construct($name, $attribute, $resolveCallback);

        $this->withMeta([
            'apiKey' => env('FROALA_ACTIVATION_KEY'),
            'language' => config('app.locale', 'en'),
        ]);
    }
}
