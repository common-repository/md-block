<?php
namespace Mehedi\MDBlock;

require_once __DIR__ .'/libs/Parsedown.php';

final class Markdown
{
    protected static $instance;

    public static function getInstance()
    {
        if (is_null(self::$instance)) {
            self::$instance = new Parsedown();
        }

        return self::$instance;
    }
}