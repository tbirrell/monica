<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * A module is a section of information that appears in the Contact sheet, like
 * 'Activities' or 'Notes'.
 */
class Mindmap extends Model
{
    /**
     * The attributes that aren't mass assignable.
     *
     * @var array
     */
    protected $guarded = ['id'];
    protected $table = 'mindmap';
    
    public function contact() {
        return $this->hasOne('App\Contact');
    }
}
